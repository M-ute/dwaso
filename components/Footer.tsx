import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="mt-16 flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-0 gap-8  rounded-lg bg-gray-800 p-8">
            {/*SECTIONS*/}
            {/*FIRST SECTION*/}
            <div className="flex flex-col items-center  md:items-start gap-4 ">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Dwaso"
                        width={36}
                        height={36}
                    />
                    <p className=" md:block  text-md font-bold tracking-widest text-gray-400"> 
                        DWASO 
                    </p>
                </Link>
                <p className="text-sm text-gray-400">© 2026 DWASO</p>
                <p className="text-sm text-gray-400">All Rights Reserved</p>
            </div>
            {/*SECOND SECTION*/}
            <div className="flex flex-col text-sm text-gray-400 items-center  md:items-start gap-4 ">
                <p className="text-sm text-amber-200">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy and Policy</Link>
            </div>

            <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-4 ">
                <p className="text-sm text-amber-200">Links</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Best Sellers</Link>
                <Link href="/">Sale</Link>
            </div>

            <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-4 ">
                <p className="text-sm text-amber-200">Links</p>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Send a M essage</Link>
            </div>
        </div>
    )
}

export default Footer