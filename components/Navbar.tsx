import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-300 pb-3 ">
            {/*LEFT*/}
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Dwaso"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className=" md:block  text-md font-extrabold tracking-widest">DWASO </p>
            </Link>

            {/*RIGHT*/}
            <div className="flex items-center gap-6  ">
                <SearchBar/>
                <Link href="/">
                    {/*Remove these comments afterr installing Lucid-react*/}
                    {/* <Home className="w-4 h-4 text-gray-600"/> */}
                </Link>
                {/* <Bell className="w-4 h-4 text-gray-600"/> */}
                {/* <ShoppingCart className="w-4 h-4 text-gray-600"/> */}
                <Link href="/login ">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar