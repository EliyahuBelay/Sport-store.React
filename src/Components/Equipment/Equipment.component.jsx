import {useContext} from 'react';
import {equipmentContext} from '../../MyContex/EquipmentContex';

function Equipment(){
    const {equipment,setEquipment} = useContext(equipmentContext);
    return(
        <ul>
            {equipment.map((item)=><li>{item.equipmentName}</li>)}
        </ul>
    )
}
export default Equipment;