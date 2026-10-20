
import { Additem } from '../Store/cartslice';
import './Products.css'
import {useDispatch} from 'react-redux'
const Products=({name,id,price,image})=>{
    let dispatch = useDispatch();
    return (
        <div className="Product-container">
        <img src = {image}></img>
        <div className="Product-details">
        <span className="name">{name}</span>
        <span className="price">RS {price}</span>
        <button onClick={()=>{dispatch(
            Additem({name:name,image:image,price:price,id:id})
        );
        }}>ADD +</button>
        </div>
    </div>
    )
}
export default Products;