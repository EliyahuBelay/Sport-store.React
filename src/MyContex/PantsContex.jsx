import React,{useEffect, useState} from "react";
import  {Get}  from "../Services/Pants-service.service";

export const pantsContex = React.createContext();


function PantsContex(props){
    const [pants,setPants] = useState([])
    useEffect(()=>{
        Get()
        .then(res => setPants(res))
    }
    ,[])
    return(
        <pantsContex.Provider value={{pants,setPants}}>
            {props.children}
        </pantsContex.Provider>
    )
}
export default PantsContex;