
import {useEffect, useState} from 'react';
import CartSingle from './CartSingle';



const CartMultiple = () => {
    const [items, setItems] = useState([
        {id: 0 , name: 'gold', price: 230},
        {id: 1 , name: 'silver', price: 90},
        {id: 2 , name: 'platinum', price: 300},
        
    ])
    return ( 
        <>
            {
                items.map((cartItem) => (
                    <div key={cartItem.id}>
                         <CartSingle name={cartItem.name} price={cartItem.price}></CartSingle>
                    </div>
                ))
            }
        
        </>
     );
} 
 
export default CartMultiple;





