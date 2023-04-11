import React, { useState } from "react";
//import "../styles/searchStyle";

function SearchComp() {
    const [searchString, setSearchString] = useState("");

    const handleSearchClick= () => {
        console.log('search');
    }
    
    return (
        <div>
        <form onSubmit={handleSearchClick} className='formContainer' 
            style={{padding: 16}}>
                <input type="text" placeholder="Search cities..." name="search" value={searchString} 
                    onChange={(e) => setSearchString(e.target.value)}
                    style={{borderRadius: 5, borderColor: "grey", width: 550, height: 40, textIndent: 4, fontSize: 16}}/>
                <br></br>
            {/*<button type="submit" className='-ml-9 mt-4'><img src={search_icon} alt='search'/></button>*/}
            </form>
        </div>
  );
}


export default SearchComp;
