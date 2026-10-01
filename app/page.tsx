import Image from "next/image"

const Homepage = () => {
  return (
    <div className=" ">
      <div className="relative aspect-3/1">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
    </div>
  )
}

export default Homepage