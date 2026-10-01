// import { SearchIcon } from "lucide-react"

// const SearchBar = () => {
//     return (
//         <div className=" sm:flex items-center gap-2 rounded-md ring-1 ring-gray-300 px-2 py-1 shadow-md">
//             {/*Import lucide-react and use it here. delete comment after installation*/}
//              <SearchIcon className="w-4 h-4 text-gray-500"/>
//              <input id="search" placeholder="Search..." className="text-sm outline-0 text-gray-500"/>
//         </div>
//     )
// }

// export default SearchBar

import { RefObject } from "react"
import { SearchIcon } from "lucide-react"

type SearchBarProps = {
    inputRef?: RefObject<HTMLInputElement | null>
}

const SearchBar = ({ inputRef }: SearchBarProps) => {
    return (
        <div className="flex w-full items-center gap-2 rounded-md ring-1 ring-gray-300 px-2 py-1 shadow-md md:w-64">
            <SearchIcon className="w-4 h-4 shrink-0 text-gray-500" />
            <input
                ref={inputRef}
                id="search"
                type="search"
                placeholder="Search..."
                className="min-w-0 flex-1 bg-transparent text-sm outline-0 text-gray-500"
            />
        </div>
    )
}

export default SearchBar