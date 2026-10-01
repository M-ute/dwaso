import Image from "next/image"

const Homepage = () => {
  return (
    <div className=" ">
      <div className="relative aspect-2/1 w-full overflow-hidden rounded-lg">
        <Image src="/featured2.png" alt="Featured Product" fill />
      </div>
    </div>
  )
}

export default Homepage