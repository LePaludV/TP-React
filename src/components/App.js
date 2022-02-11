
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/leaf+1.png'
import Footer from './Footer';
import { useState,useEffect } from 'react';
import '../styles/Layout.css'



function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    return()=>
    localStorage.setItem("MonPanier",JSON.stringify(cart))
},[cart])
  return (
    <div>
    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <div className="lmj-layout-inner">
    <Cart cart={cart} updateCart={updateCart} />
    <ShoppingList cart={cart} updateCart={updateCart}/>
    </div>
    <Footer />
  </div> );
}

export default App;
