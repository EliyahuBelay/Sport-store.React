import { useContext } from 'react';
import { ShoesContex, shoesContex } from '../../MyContex/ShoesContex';
import ShoeCard from '../featchers/ShoeCard/ShoeCard.component';


function ShoesCards() {
    const { shoes } = useContext(shoesContex);
    return (
        <div className='container_shoe_cards'>
                {shoes.map((item) => <ShoeCard shoeItem={item} />)}
        </div>


    )
}
export default ShoesCards;