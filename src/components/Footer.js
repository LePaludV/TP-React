import React,{isValidElement, useState} from 'react';
import '../styles/Footer.css'
const handleSubmit= (e) =>{
    e.preventDefault();
    alert(e.target['my_input'].value)
    }
    

const Footer = () => {
    const [inputValue,setInputValue] = useState('Tapez votre texte')
    
    const handleInput = (e) =>{
        setInputValue(e.target.value)
    }
    const handleBlur = () =>{
        if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
    }

    return (
        <footer className='lmj-footer'>
            <div className="lmj-footer-elem">Pour les passionné·e·s de plantes 🌿🌱🌵</div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form onSubmit={handleSubmit}>
      <input onBlur={handleBlur} onChange={handleInput} type="text"name="my_input" value={inputValue} />
    
      </form> 
        </footer>
    );
};

export default Footer;