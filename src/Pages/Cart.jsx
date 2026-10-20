import CartStruct from "../componenets/CartStruct"
import EmptyCart from "../componenets/EmptyCart";
import './Cart.css'
import {useSelector} from 'react-redux'
import {Additem} from '../Store/cartslice';
const Cart =()=>{
    const item = useSelector(state=>state);
    const total = item.Additem.reduce((initialval,index)=>initialval+index.price , 0);
    return(
        <div className="cart-section">
            {item.Additem.length<=0 ? <EmptyCart/> :
            <div className="cart-section">
                {item.Additem.map((items)=>(
                    <CartStruct name={items.name}  price={items.price} id={items.id}
                    image={items.image}/>
                ))}
                <div className="total">
    <span>Total products : {item.Additem.length}</span>
    <span>Total Bill : {total}</span>
</div>
            </div>
            
}    

            </div>
            
    )
}
export default Cart;