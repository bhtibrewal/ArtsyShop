export {};

declare global {
  interface Window {
    Razorpay: any
  }
  interface Error {
    response?: {
      data?: {
        errors?: string
      }
    };
  };
}


declare module "uuid"