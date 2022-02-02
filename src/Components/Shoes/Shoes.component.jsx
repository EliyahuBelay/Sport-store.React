import { useContext } from 'react';
import {shoesContex} from '../../MyContex/ShoesContex';

function Shoes() {
    const {shoes,setShoes} = useContext(shoesContex);
    return (
        <ul>
            {shoes.map((item) => <li>{item.ShoeType}</li>)}
        </ul>
    )
}
export default Shoes;