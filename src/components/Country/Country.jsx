
import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    // console.log(country)
    const {name,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false)

    const clickHandler=()=>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountry)
    console.log(handleVisitedFlags);
   
    return (
        <div className={`country ${visited ? 'visited' :'non-visited'}`}>
           <h3 style={{color: visited ? 'purple' : 'blue'}}>Name:{name?.common}</h3>
           <img style={{width:'300px',height:'250px'}} src={flags.png} alt="" /> 
           <p>Population:{population}</p>
           <p>Area:{area}</p>
           <p><small>Code:{cca3}</small></p>
           <button onClick={()=>{
            handleVisitedCountry(country),handleVisitedFlags(country.flags.png)}
            }>mark visit country</button>
           <br></br><br></br>
           <button onClick={clickHandler}>{visited ? 'Visited' : 'Going'}</button>
           {visited ? 'I visit this country':'I want to visit'}
        </div>
    );
};

export default Country;