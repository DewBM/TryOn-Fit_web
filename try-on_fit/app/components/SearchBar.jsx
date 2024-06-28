import React from 'react'
import SearchIcon from "./SearchIcon"

function SearchBar() {
  return (
   <form className='w-[100px] relative'>
    <div className="relative">
        <input type='search' placeholder='Search Here' className='
        w-full p-4 rounded-full bg-slate-50' />
        <button className='absolute right-1 top-1/2 -translate-y-1/2
        p-4 bg-slate-900 rounded-full'>
            <SearchIcon />
        </button>
    </div>
   </form>
  )
}

export default SearchBar
