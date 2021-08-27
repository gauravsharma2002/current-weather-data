import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp =() => {
    const [city,setCity]= useState(null);
    const [search,setSearch] = useState("Moradabad");
    useEffect( () =>{
        const fetchApi= async()=>{
            const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
            const suffix = "&units=metric&appid=c89c9637debf2a330ea32620cb7bfe8a";
            const response=await fetch(baseUrl +search+ suffix);
            const jsonWeather = await response.json();
            setCity(jsonWeather.main);
        
        }
        
         fetchApi(); 
    },[search])


    return(
        <><div className="tag"><h1>Current Weather Data </h1></div>
        
            <div className="box">
                
                <div className="inputData">
                <form>
                    <input
                     type="search"
                    className="inputfield" placeholder="Search city name"
                    onChange={(event)=>{setSearch(event.target.value)
                    }}
                    />
                    <button type="reset">&times;</button></form>
                </div>

                
                    {!city ? (
                                <p className="error_msg">No data found</p>
                            ):(
                    <div>
                    <div className="weathercon">
                        <i className="fas fa-sun"></i>
                     </div>
                        <div className="info">
                    
                            <h2 className="location"> <i className="fas fa-street-view"></i>{search}</h2>
                             <h1 className="temp">{city.temp} °C </h1>
                            <h3 className="tempmin_max">Min:{city.temp_min} °C | Max:{city.temp_max} °C</h3>
                        </div>


                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>

                    )}
                    
               
        
            </div>
        
        </>
    )
}
export default Tempapp;
