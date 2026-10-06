import { create } from 'zustand';
import { CartStoreActionType, CartStoreStateType } from '../types';
import { persist, createJSONStorage} from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
    persist ((set) => ({
        cart: [],
        addToCart: (product) => set((state) => ({ cart: [...state.cart,product]})),
        removeFromCart: (product) => set((state) => ({ cart: state.cart.filter(p=>p.id !== product.id) })),
        clearCart: () => set({ cart: []}),
    }),
    {
        name: "cart",
        storage: createJSONStorage(() => localStorage )
    })
);

export default useCartStore;