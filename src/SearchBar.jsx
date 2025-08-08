import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would search videos
    // For now, just redirect to home
    navigate(`/?search=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSearch} className='flex-1 max-w-2xl'>
      <div className='relative'>
        <input
          type='search'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500'
        />
        <button
          type='submit'
          className='absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full'
        >
          <svg
            className='w-5 h-5 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
