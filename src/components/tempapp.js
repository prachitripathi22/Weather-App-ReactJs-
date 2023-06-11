import React , {useState} from "react";
import "./css/style.css";
import { useEffect } from "react";

const Tempapp = () =>{

    const [city , setCity] = useState(null);
    const [search ,setSearch ] = useState("Delhi"); 

    useEffect( () => {
        const fetchApi = async () =>
        {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ad98661e970473da85d440dcb9379b01`   
            const response = await fetch(url);
            
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main)

        }

        fetchApi();
    } , [search])
    

    return ( 
    <>
         <div className="box">
         <div className="inputdata">
         <input type="search" className="inputfield" placeholder="Enter the city"
         onChange={(event) => {setSearch(event.target.value)}} />
         </div> 
    

    {!city ? (
        <p className="error"> NO data found <br/> Enter a correct city name</p>):
        (<div>
        {/* <div className="weathercon"><i className="fas fa-sun"></i></div> */}
         <div className="info">
            
            <h2 className="location"> 
            <i className="fas fa-street-view"></i> {search}
            </h2>
            <h1 className="temp">
            <i class="fas fa-bolt"></i> {city.temp}° C
            </h1>
            <h3 className="tempmom_max">
                Min : {city.temp_min}° C | Max : {city.temp_max}° C
            </h3>
         </div>
        </div>
        )
    }
    </div>
 </>)
    
}

export default Tempapp;
