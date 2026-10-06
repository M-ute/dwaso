import {z} from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    colors: string[];
    sizes: string[];
    images: Record<string, string>
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};

export type CartItemsType = CartItemType[ ]

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
    .email( "Enter a valid email address"),
    phone: z
    .string()
    .min(10, "Phone number should be 10 digits")
    .max(10, "Phone number should be 10 digits")
    .regex(/^\d+$/, "Phone must be numbers only! "),
    address:z.string().min(1, "Address is required"), 
    city:z.string().min(1, "City or Town is required")
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "Cardholder name is required"),
    cardNumber: z
    .string().min(16, "Card number should be 16 digits")
    .max(16, "Card number should be 16 digits")
    .regex(/^\d+$/, "Card number must be numbers only! "),
    expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Expiration date must be in MM/YY format"),
    cvv: z
    .string()
    .min(3, "CVV is required")
    .max(3, "CVV is required")
    .regex(/^\d+$/, "CVV must be numbers only! "),
    
     
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
    cart: CartItemsType  ;
};

export type CartStoreActionType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart: () => void;
}

