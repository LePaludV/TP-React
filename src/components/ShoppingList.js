import React,{useState} from 'react';
import { plantList } from '../datas/plantList';
import "../styles/ShoppingList.css"

import PlantItem from './PlantItem';
import Categories from './Categories';





const ShoppingList = ({cart,updateCart}) => {
    const [categories,updateCategories]=useState('')

    const addToCart =(name,price) =>{
    const currentItem=cart.find((plant) => plant.name===name)
    if(currentItem){
        const cartF= cart.filter(item =>item.name!==name);
        updateCart([...cartF, {name,price,amount:currentItem.amount+1 }])
    }
    else{
        updateCart([...cart,{name,price,amount:1}])
    }
}
const cat=[];
plantList.forEach(e => {
    if(!cat.includes(e.category)){
        cat.push(e.category)
     }
});

    return (
        <div className="lmj-shopping-list">
            <Categories cat={cat} categories={categories} updateCategories={updateCategories}/>
        <ul className="lmj-plant-list">
            
            { plantList.map((item) =>
            !categories || categories === item.category ?(
            
            <div key={item.id}>
            <PlantItem name={item.name} cover={item.cover} light={item.light} water={item.water} />
            <button onClick={() => addToCart(item.name,item.price)}>Ajouter</button>
            </div>) : null
        
            ) }
        </ul>
        </div>
    );
};

export default ShoppingList;