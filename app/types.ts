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
    email: z.string().min(1, "Email is required"),
    phone: z
    .string()
    .min(10, "Phone number should be 10 digits")
    .max(12, "Phone number should be 10 digits")
    .regex(/^\d+$/, "Phone must be numbers only! "),
    address:z.string().min(1, "Address is required"), 
    city:z.string().min(1, "City or Town is required")
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;