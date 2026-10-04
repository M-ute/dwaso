"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home, LucideShoppingCart, SearchIcon, ShoppingCart, XCircleIcon } from "lucide-react"
import ShoppingCartIcon from "./ShoppingCartIcon"

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <nav className="w-full flex items-center justify-between gap-4 border-b border-gray-300 pb-3">
            {/*LEFT*/}
            <Link href="/" className="flex items-center shrink-0">
                <Image
                    src="/logo.png"
                    alt="Dwaso"
                    width={36}
                    height={36}
                    className="w-10 h-10 md:w-12 md:h-12 "
                />
                <p className="hidden md:block text-md font-extrabold tracking-widest">DWASO</p>
            </Link>

            {/*RIGHT*/}
            <div className={`flex items-center gap-4 md:gap-6 ${showSearch ? "flex-1" : ""} md:flex-none`}>
                {/* Search bar: always visible on md+, on small screens only when toggled */}
                <div className={`${showSearch ? "block flex-1" : "hidden"} md:block md:flex-none`}>
                    <SearchBar />
                </div>

                {/* Home, Bell, Cart: hidden on small screens while searching */}
                <div className={`${showSearch ? "hidden" : "flex"} md:flex items-center gap-6`}>
                    <Link href="/">
                        <Home className="w-4 h-4 text-gray-600" />
                    </Link>
                    <Bell className="w-4 h-4 text-gray-600" />
                    <ShoppingCartIcon/>
                </div>

                {/* Toggle button: small screens only */}
                <button
                    type="button"
                    onClick={() => setShowSearch((prev) => !prev)}
                    aria-label={showSearch ? "Close search" : "Open search"}
                    className="md:hidden shrink-0"
                >
                    {showSearch ? (
                        <XCircleIcon className="w-4 h-4 text-gray-600" />
                    ) : (
                        <SearchIcon className="w-4 h-4 text-gray-600" />
                    )}
                </button>

                {/* <Link href="/login" className="shrink-0">Sign in</Link> */}
                <Link 
                    href="/login" 
                    className="shrink-0 rounded-md bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
                >
                    Sign in
                </Link>
            </div>
        </nav>
    )
}

export default Navbar