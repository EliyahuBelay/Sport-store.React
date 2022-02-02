import {pantsContex} from '../../MyContex/PantsContex'; 
import { useContext } from 'react';

export const Pants = ()=>{
    const {pants,setPants} = useContext(pantsContex)
    return(
        <ul>
            {pants.map(data => <li>{data.ClothBrand}</li>)}
        </ul>
    )
}
