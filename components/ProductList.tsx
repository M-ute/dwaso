// TEMPORARY DATA FOR FRONTEND. REPLACE WITH DATABASE

import { ProductsType, ProductType } from "@/app/types"
import Categories from "./Categories"
import ProductCard from "./ProductCard"

const products:ProductsType  = [
    {
        id : 1,
        name: "Plain T-Shirt",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["gray", "purple ", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
},
{
        id : 2,
        name: "Hoodie-Checked",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["gray","green"],
        images: {
            gray: "/products/2g.png",
            green: "/products/2gr.png",
        },
},
{
        id : 3,
        name: "Nike Ultraboost Pulse",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["blue","black", "green"],
        images: {
            blue: "/products/3b.png",
            black: "/products/3bl.png",
            green: "/products/3gr.png",
        },
},
{
        id : 4,
        name: "New Balance T-Shirt",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["white", "purple"],
        images: {
            white: "/products/4w.png",
            purple: "/products/4p.png",
        },
},
{
        id : 5,
        name: "Nike Hoodie Plain",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["black", "orange", "red"],
        images: {
            black: "/products/5bl.png",
            orange: "/products/5o.png",
            red: "/products/5r.png",
        },
},
{
        id : 6,
        name: "Nike Air Force 1",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["green", "white"],
        images: {
            green: "/products/6g.png",
            white: "/products/6w.png",
        },
        
},
{
        id : 7,
        name: "Nike Ultraboost Pulse",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["green", "purple"],
        images: {
            green: "/products/7g.png",
            purple: "/products/7p.png",
        },
        
},
{
        id : 8,
        name: "Long Sleeves",
        shortDescription: "Lorem Ipsum this is a description.",
        description: "this has to be the full description.",
        price: "39.99",
        sizes: ["sm", "m", "lg", "xl", "xxl"],
        colors: ["black", "green"],
        images: {
            black: "/products/8b.png",
            green: "/products/8gr.png",
        },
        
},

]

const ProductList = () => {
    return (
        <div className="w-full ">
            <Categories/>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList