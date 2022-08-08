export type Product = {
  _id: number;
  id?: number;
  title: string;
  artist: string;
  desc: string;
  img: string;
  price: number;
  item_original_price: number;
  original_price: number;
  rating: number;
  rated_by: number;
  categoryName:
    | "Nature"
    | "Landscape"
    | "Street Art"
    | "Abstraction"
    | "Portrait"
    | "Digital Art";
  inStock: boolean;
  fastDelivery: boolean;
  qty?: number | undefined;
  shipping?: number | undefined;
};

export type Category = {
  banner_img: string;
  img_src: string;
  categoryName: string;
  _id: number;
};

export type Address = {
  _id?: number;
  street: string;
  city: string;
  country: string;
  zip_code: string;
};
export type UserDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  addresses: Address[];
};
export type ProductStateType = {
  productList: Product[];
  categoriesList: Category[];
  wishList: Product[];
  cart: Product[];
  couponDiscount: number;
  selectedAddress?: number;
  order: { items: Product[]; totalAmount?: number };
};
