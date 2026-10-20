import { FaShoppingCart } from "react-icons/fa";
import './Shop.css';
import { Categories } from "../Categories";
import { useState } from "react";
import { dummydata } from "../Dummydata";
import Products from "../componenets/Products";
const Shop=()=>{
    const [category , editcategory] = useState(dummydata);
        const onSelectedItem = (Category)=>{
            if(Category==='All'){
                editcategory(dummydata);
            }else{
            const updateditems = dummydata.filter((items)=>(items.category == Category))
            editcategory(updateditems);
            }
        }
return (
    <>
    <div className="Shop">
        <div className="title">
            <span>SHOP</span>
             <FaShoppingCart />
        </div>
        <div className="categories" >
                {Categories.map((items , index)=>(
                    <div className="card" key={index} onClick={()=>{
                onSelectedItem(items.name);
            }}>
                        <img src={items.img}></img>
                      <span>{items.name}</span>
                    </div>
                ))}
            </div>
             <center>
    <div className="Product-section">
        {category.map((item)=>(
            <Products key={item.id} name={item.name} price={item.price} id={item.id} image={item.image}/>
        ))}
        
    </div>
    </center>
    </div>
    </>
)
}
export default Shop;