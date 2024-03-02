import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SearchInput({ onChange, searchData, isLoading }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    onChange(event);
    setShowSuggestions(event.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/places/${suggestion._id}`);
    // console.log("Clicked suggestion:", suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative flex w-full justify-center">
      <div className="relative w-4/5 transition-all duration-300 hover:w-5/6">
        <input
          onChange={handleInputChange}
          className="w-full rounded-xl border-2 border-stone-200 px-3 py-1 text-slate-600 outline-none placeholder:text-sm placeholder:text-slate-400 focus-visible:border-slate-500"
          type="text"
          placeholder="Search places"
        />
        <FaMagnifyingGlass className="absolute bottom-2 right-3 text-slate-400" />
      </div>

      {showSuggestions && (
        <div className="absolute left-1/2 top-full w-[80%] -translate-x-1/2 transform rounded-b-xl border border-stone-200 bg-white">
          <ul>
            {searchData.map((suggestion) => (
              <li
                key={suggestion._id}
                className="cursor-pointer px-4 py-2 hover:bg-stone-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
