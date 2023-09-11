import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([])
const [visitedCountries,setVisitedCountries]=useState([]);
const [visitedFlags,setVisitedFlags]=useState([])

    useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>setCountries(data))
    },[])

    const handleVisitedCountry=country=>{
        // console.log('add me');
       
            const newVisitedCountries=[...visitedCountries,country]
            setVisitedCountries(newVisitedCountries)
        // console.log(country)
    }

    const handleVisitedFlags=flag=>{
       const newVisitedFlags=[...visitedFlags,flag]
       setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Countries:{visitedCountries.length}</h3>
                <ul>
                  {
                      visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                     
                  }
                  {
                    visitedFlags.map((flag,index)=> <img style={{width:"120px",height:"120px", marginInline:"10px"}} key={index} src={flag}></img>)
                  }
                </ul>
               
            </div>
            <div className="country-container">
            {
               countries.map((country) =><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
            }
            </div>
         
        </div>
    );
};

export default Countries;