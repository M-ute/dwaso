const SearchBar = () => {
    return (
        <div className=" sm:flex hidden items-center gap-2 rounded-md ring-1 ring-gray-300 px-2 py-1 shadow-md">
            {/*Import lucide-react and use it here. delete comment after installation*/}
             {/*<Search className="w-4 h-4 text-gray-5 00">*/}
             <input id="search" placeholder="Search..." className="text-sm outline-0 text-gray-500"/>
        </div>
    )
}

export default SearchBar