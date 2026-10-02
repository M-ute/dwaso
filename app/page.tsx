import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="relative aspect-2/1 w-full overflow-hidden rounded-lg">
        <Image src="/featured2.png" alt="Featured Product" fill />
      </div>
      <ProductList/>
    </div>
  )
}

export default Homepage