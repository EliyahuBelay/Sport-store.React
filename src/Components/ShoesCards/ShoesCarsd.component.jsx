import { useContext } from 'react';
import { isLoading, shoesContex } from '../../MyContex/ShoesContex';
import Loading from '../featchers/Loading';
import ShoeCard from '../featchers/ShoeCard/ShoeCard.component';


function ShoesCards() {
    const { shoes,isLoading } = useContext(shoesContex);
    return (
        <div className='container_shoe_cards'>

                {
                    isLoading?<Loading/>:shoes.map((item) => <ShoeCard shoeItem={item} />)}
        </div>


    )
}
export default ShoesCards;