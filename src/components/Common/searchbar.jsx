import React, { useState } from "react";
import { Search } from "lucide-react"; 
import { Input } from "@/components/ui/input"; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Search for:", searchTerm); 
    }
  };

  return (
    <div className="relative w-full md:w-[270px]">
     
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleSearch} 
        className="w-full pl-10 pr-3 py-2" 
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
    </div>
  );
};

export default SearchBar;
