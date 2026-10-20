import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import './header.css';
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { Additem } from '../Store/cartslice';
const Header=()=>{
    const item = useSelector(state=>state);
 return (
    <><div className="nav">
    <div className="Upper-header">
        <div className="H-Left">
    <span >ShopNest</span>
     <FaShoppingCart />
     </div>
        <form className="search-box">
        <input  placeholder="Search Items"></input>
        <button><IoMdSearch  /></button>
        
        </form>
     <Link to={'/cart'}><div className="cart-container" >
  <FaShoppingCart />
  <span >{item.Additem.length}</span>
</div>
</Link>
    </div>
    <div className="Lower-Header">
        <Link to={"/"}><li>Home</li></Link>
        <Link to={'/shop'}><li>Shop</li></Link>
        <Link to={'/cart'}><li>Cart</li></Link>
        <Link to={'/contact'}><li>Contact</li></Link>
        
    </div>
   </div>
    </>
 )
}
export default Header;