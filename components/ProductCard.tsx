"use client"

import { ProductType } from "@/app/types"
import { ShoppingBag, ShoppingBagIcon, ShoppingBasket, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductCard = ({product}:{product:ProductType}) => {
    // GET SIZE, COLOR AND ADDTOCART INFORMATION
    const [productTypes, setProductTypes] = useState({
        size:product.sizes[0],
        color:product.colors[0]
    });

    // CHANGE STATE OF PRODUCT UPON CLICK ON SIZE, COLOR
    const handleProductType = ({type,value}:{type:"size" | "color", value:string})=> {
         setProductTypes((prev) => ({
            ...prev,
            [type]: value,
         }));
    };
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE */}
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-2/3">
                    <Image 
                        src={product.images[productTypes.color]} 
                        alt={product.name} 
                        fill 
                        className=" object-cover hover:scale-106 transition-all duration-400"
                    />
                </div>
            </Link>
            {/* PRODUCT DETAILS */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-bold">{product.name }</h1>
                <p className="text-gray-500 text-sm ">{product.description}</p>
                {/* PRODUCT TYPES */}
                <div className="flex items-center gap-4 text-xs">
                    {/* SIZE */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select 
                                name="size" id="size" 
                                className="ring ring-gray-400 rounded-md px-1 py-1 bg-gray-100" 
                                onChange={(e) =>
                                        handleProductType({ type: "size", value: e.target.value })
                                    }>
                            {
                                product.sizes.map(size=>(
                                    <option key={size } value={size}>{size.toUpperCase()}</option>
                                ))
                            }
                        </select>
                    </div>
                    {/* COLORS */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-600">Color</span>
                        <div className="flex items-center gap-2">
                             {product.colors.map(color => (
                                    <div 
                                        className={`cursor-pointer border ${productTypes.color === color ? "border-gray-800" : "border-gray-100"} rounded-full p-0.5`} 
                                        key={color} 
                                        onClick={()=>handleProductType({type:"color", value:color})}>
                                        <div className="w-3.5 h-3.5 rounded-full" 
                                             style={{backgroundColor:color}}/>
                                    </div>
                                )
                             )}
                        </div>
                    </div>
                </div>
                {/* PRICE AND ADD TO CART BUTTON */} 
                <div className="flex items-center justify-between gap-2 ">
                    <p className="font-extrabold text-lg">${product.price}</p>
                    <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 cursor-pointer text-sm hover:text-white hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4"/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard