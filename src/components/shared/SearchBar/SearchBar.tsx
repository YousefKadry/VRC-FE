import { useState } from 'react';
import Input from "../Input.tsx";
import SearchIcon from "../../../assets/icons/search.svg";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const onSearch = (searchTerm: string) => {
        // if search term is empty do nothing & set the input to be placeholder
        if (searchTerm === '') {
            return
        }

        console.log('Search term:', searchTerm);
    }

    const handleInputChange = (event : any) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Pass the search term to the parent component
    };

    return (
        <Input
            type="text"
            placeholder="Search Poly Library"
            value={searchTerm}
            handleChange={handleInputChange}
            className="w-full bg-gradient-to-r from-[#7542b0] to-[#7d5cae] text-white text-center"
            IconSrc={SearchIcon}
            IconAlt="Search Poly Library"
        />
    );
}

export default SearchBar
