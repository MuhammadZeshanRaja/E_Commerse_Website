import ec from '../assets/emptycart.png';
import './EmptyCart.css'
const EmptyCart=()=>{
    return (
        <div className="empty">
            <img src={ec} alt="" />
            <h1>Empty Cart</h1>
        </div>
    )
}
export default EmptyCart;