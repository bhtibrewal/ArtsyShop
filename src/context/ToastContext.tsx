import { v4 as uuid } from "uuid";
import { createContext, useContext, useReducer, useCallback } from "react";
type Toast = { type: string; title: string; id?: number };
type ToastContextType = {
  toastList: Toast[];
  showToast: Function;
  deleteToast: Function;
};
const ToastContext = createContext<ToastContextType | null>(null);

const ToastProvider = ({ children }: { children?: JSX.Element }) => {
  const toastListReducer = (
    state: Toast[],
    { type, payload }: { type: string; payload: any }
  ) => {
    switch (type) {
      case "ADD_TOAST":
        return [...state, { id: uuid(), ...payload }];
      case "DELETE_TOAST":
        return state.filter((toast) => toast.id !== payload);
      default:
        return state;
    }
  };

  const [toastList, toastListDispatch] = useReducer(toastListReducer, []);

  const deleteToast = useCallback(
    (toastId: number) => {
      toastListDispatch({ type: "DELETE_TOAST", payload: toastId });
    },
    [toastList]
  );
  const showToast = (toastObj: { type: string; title: string }) => {
    toastListDispatch({ type: "ADD_TOAST", payload: toastObj });
  };
  return (
    <ToastContext.Provider value={{ toastList, deleteToast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(`use useToast must be used inside a context provider`);
  }
  return context;
};

export { ToastProvider, useToast };
