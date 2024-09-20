import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = (props) => {
    const [searchText, setSearchText] = useState([]);
    
    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    useEffect(() => {
        // props.onSearch(searchText);
      }, [searchText]);

    return (
        <div>
            <input className='Search-box' type="text" placeholder='Search Country' value={searchText} onChange={handleChange} />
            
        </div>
    );
};

export default Search;