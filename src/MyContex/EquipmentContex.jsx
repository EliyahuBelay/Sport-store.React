import React,{useEffect, useState} from 'react'; 
import {Get} from '../Services/Equipment-service.service';

export const equipmentContext = React.createContext();

const EquipmentContex = (props)=>{
    const [equipment,setEquipment] = useState([]);
    useEffect(()=>{
        Get()
        .then(res => setEquipment(res))
    }
    ,[])
    return (
        <equipmentContext.Provider value={{equipment,setEquipment}}>
            {props.children}
        </equipmentContext.Provider>
    )
}
export default EquipmentContex;