import React, { useState } from "react";
import axios from 'axios';

function SearchComp() {
    const [searchString, setSearchString] = useState("");
    const [cityData, setCityData] = useState(null);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");

    /*const handleSearchClick= (e) => {
        e.preventDefault();
        handleSubmit();
        console.log("HEREEE", latitude, longitude);
        sendCityData();
        getCityData();
        console.log('search');
    }*/

    
    const handleSearchClick= async (e) => {
        e.preventDefault();
        await handleSubmit();
        console.log("HEREEE", latitude, longitude);
        sendCityData();
        getCityData();
        console.log('search');
        };

    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7b29a86305msheae3d4bab2f1105p1997c2jsn34379b010cce',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    
    const handleSubmit = () => {
        console.log(searchString);
        return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchString}`, options)
	            .then(response => response.json())
	            .then(response =>{
                    return {
                        options: response.data.map((city) => {
                            setLatitude(city.latitude);
                            setLongitude(city.longitude);
                            setCityName(city.name);
                            setCountry(city.country);
                            console.log(city.name);
                            return {
                                latitude: city.latitude,
                                longitude: city.longitude,
                                name: city.name,
                                country: city.country
                            }
                        })
                    }
                    })
                    .catch(err => console.error(err));
    }

    const sendCityData = () => {    
        axios.post('http://localhost:3001/cityData', 
        {latitude, longitude})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getCityData = () => {
        axios.get('http://localhost:3001/getData')
            .then((response) => {
                console.log(response.data);
                setCityData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }//<p>{cityData?.main.temp}</p>
    
    return (
        <div>
        <form onSubmit={handleSearchClick} className='formContainer' 
            style={{padding: 16}}>
                <input type="text" placeholder="Search cities..." name="search" value={searchString} 
                    onChange={(e) => setSearchString(e.target.value)}
                    style={{borderRadius: 5, borderColor: "grey", width: 550, height: 40, textIndent: 4, fontSize: 16}}/>
                <br></br>
            <button type="submit">GO</button> 
        </form>

        <div>
            <p>{cityData?.main.temp}</p>
        </div>
        </div>
  );
}


export default SearchComp;
