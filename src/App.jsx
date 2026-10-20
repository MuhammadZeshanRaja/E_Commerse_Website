
import './App.css'
import Footer from './componenets/Footer';
import Header from './componenets/Header';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'  element= {<Home/>}/>
      <Route path='/shop' element = { <Shop/>}/>
      <Route path='/cart' element = { <Cart/>}/>
      <Route path='/contact' element = { <Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App;
