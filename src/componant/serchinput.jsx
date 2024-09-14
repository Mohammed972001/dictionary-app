import { useState } from "react";

export default function SearchInput({ onSearch }) {
const [word,setword]=useState("");
const handleSearch = (event) => {
  event.preventDefault();
  onSearch(word);
}
  return (
    <form onSubmit={handleSearch} className="w-full">
    <div className="flex items-center w-full bg-gray-100 px-4 py-2 shadow-md rounded-md ">
      <input
      onChange={(e)=> setword(e.target.value)}
        type="search"
        value={word}
        placeholder="Search for a word..."
        className="bg-gray-100 px-2 focus:outline-none text-gray-700 w-full"
      />
      <span className="text-purple-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M16.657 13.686a7.5 7.5 0 10-10.606-10.606 7.5 7.5 0 0010.606 10.606z"
          />
        </svg>
      </span>
    </div>
    </form>
  );
}
