import React,{useState,useEffect} from 'react';
import '../styles/Cart.css';
const Cart = ({cart,updateCart}) => {
    

  

    const [isOpen,setIsOpen]=useState(false);
   

   

    const total = cart.reduce((acc,plantType) => acc+plantType.amount * plantType.price,0);
    useEffect(() => {
        alert('Bienvenue dans La maison jungle')
    },[])

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])
    return isOpen ? (
    <div className="lmj-cart">
        <button onClick={() => setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
        {cart.map(({name,price,amount},index) =>(
            <div key={`${name}-${index}`}>
                {name} {price}€ X {amount}

            </div>
        ))}
        
        <h3>Total : {total}€</h3>
        <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
):(
    <div className='lmj-cart-closed'>
        <button
            className='lmj-cart-toggle-button'
            onClick={() => setIsOpen(true)}>
            Ouvrir le Panier
        </button>
    </div>
)
    }
export default Cart;