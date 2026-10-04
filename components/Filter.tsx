"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams ();
    const router = useRouter ();
    const pathname = usePathname();

    const handleFilter = (value:string) => 
    {
        const params = new URLSearchParams(searchParams);
        params.set("sort",value );
        router.push(`${pathname }?${params.toString()}` , {scroll : false});
    } 
    
    return (
        <div className="w-full flex items-center justify-end gap-2 text-sm text-gray-500 my-5">
            <span className="">Sort By: </span>
            <select name="sort" 
                    id="sort" 
                      className="ring-1 ring-gray-200 rounded-sm shadow-md px-2 py-1" 
                    onChange={ (e)=> handleFilter(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    )
};
export default Filter;