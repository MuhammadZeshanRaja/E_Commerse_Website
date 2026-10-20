import image1 from ".././assets/image1.jpg";
import { MdDeleteForever } from "react-icons/md";
import './CardStruct.css';
import { useDispatch } from "react-redux";
import { Removeitem } from "../Store/cartslice";
const CartStruct=({name,price,image,id})=>{
    const dispatch = useDispatch();
    return (
        <div className="Cart">
            <div className="left-cart">
             <img src={image}></img>
             <div className="name-price">
                <span>{name}</span>
                <span>RS {price}/-</span>
             </div>
            </div>
            <div className="right-cart">
             <button onClick = {()=>{
                dispatch(Removeitem(id));
             }}>Remove <MdDeleteForever  /></button>
            </div>
        </div>
    )
}
export default CartStruct;