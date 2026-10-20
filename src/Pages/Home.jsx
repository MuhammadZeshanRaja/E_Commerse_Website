import Header from "../componenets/Header"
import bg from '../assets/bg0.gif';
import { Categories } from "../Categories";
import './home.css';
import {dummydata} from '../Dummydata';
import Products from "../componenets/Products";
import { useState } from "react";
import Footer from "../componenets/Footer";
const Home = ()=>{
    const [category , editcategory] = useState(dummydata);
    const onSelectedItem = (Category)=>{
        const updateditems = dummydata.filter((items)=>(items.category == Category))
        editcategory(updateditems);
    }
    return (
        <div className="home">
    <div className="bg-gif" >
    <img src = {bg} ></img>
    </div>
    <div className="categories" >
        {Categories.slice(0,5).map((items , index)=>(
            <div className="card" key={index} onClick={()=>{
        onSelectedItem(items.name);
    }}>
                <img src={items.img}></img>
              <span>{items.name}</span>
            </div>
        ))}
    </div>
   <h1 className="heading">Trending Products</h1>
    <center>
    <div className="Product-section">
        {category.slice(0,8).map((item)=>(
            <Products key={item.id} name={item.name} price={item.price} id={item.id} image={item.image}/>
        ))}
        
    </div>
    </center>
    
    </div>
    );
}
export default Home;