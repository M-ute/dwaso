"use client"

import { ProductType } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product}:{product:ProductType}) => {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE */}
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-2/3">
                    <Image src={product.images[product.colors[0]]} alt={product.name} fill className=" object-cover hover:scale-110 transition-all duration-400"/>
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
                        <select name="size" id="size" className="ring ring-gray-400 rounded-md px-1 py-1 bg-gray-100">
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
                                    <div className="" key={color}>
                                        <div className="w-3.5 h-3.5 rounded-full" style={{backgroundColor:color}}/>

                                    </div>
                                )
                             )}
                        </div>
                    </div>
                </div>
                <p className="font-extrabold text-lg">${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard