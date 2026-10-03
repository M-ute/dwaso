import ProductList from "@/components/ProductList"
import Image from "next/image"
import { Suspense } from "react"

const Homepage = async ({searchParams}: {searchParams: Promise<{category:string}>}) => {
  const category = (await searchParams).category
  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="relative aspect-2/1 w-full overflow-hidden rounded-lg">
        <Image src="/featured2.png" alt="Featured Product" fill />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList category={category}/>
      </Suspense>
    </div>
  )
}

export default Homepage