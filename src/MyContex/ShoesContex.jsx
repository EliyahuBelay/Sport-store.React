import React, { useEffect, useState } from 'react';
import { Get } from '../Services/Shoose-service.service';


export const shoesContex = React.createContext();


export const ShoesContex = (props)=>{
    const [shoes,setShoes] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    useEffect(()=>{
        setisLoading(true)
        Get()
        .then((res)=> setShoes(res))
        .catch(()=> console.log("error"))
        .finally(()=> setisLoading(false))
    }
    ,[])
    return(
        <shoesContex.Provider value={{shoes,setShoes,isLoading}}>
            {props.children}
        </shoesContex.Provider>

    )
}