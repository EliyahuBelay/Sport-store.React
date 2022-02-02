import React, { useEffect, useState } from 'react';
import { Get } from '../Services/Shoose-service.service';


export const shoesContex = React.createContext();


export const ShoesContex = (props)=>{
    const [shoes,setShoes] = useState([]);
    useEffect(()=>{
        Get()
        .then((res)=> setShoes(res))
    }
    ,[])
    return(
        <shoesContex.Provider value={{shoes,setShoes}}>
            {props.children}
        </shoesContex.Provider>

    )
}