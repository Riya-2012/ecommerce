import React from 'react'
import { Search } from 'lucide-react';
function SearchBar() {
  return (
    <div className=' hidden sm:flex flex ring-1 ring-gray-200 rounded-md  gap-2 px-2 py-1 shadow -md'>
          <Search className='w-4 h-4 text-gray-500'/>
          <input type="text" placeholder='Search..' className='text-sm outline-0 ' id='search' />
    </div>
  )
}

export default SearchBar
