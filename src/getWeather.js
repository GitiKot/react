import React, { useEffect, useState } from "react";
// import Weather from './weather';
export default function GetWeather() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log("Latitude is:", lat)
      console.log("Longitude is:", long)
    //   console.log(https://api.openweathermap.org/data/2.5);
    console.log("process",process.env);
console.log(process.env.REACT_APP_API_URL);
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=c422df782675336cad13f16181f06dc7` , {

    //   await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}` , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log("result",result);
      });
    }
    fetchData();
  }, [lat,long])
  

  return (
    <div className="GetWeather">
      
    </div>
  );
}