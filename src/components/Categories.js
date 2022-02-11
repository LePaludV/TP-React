
import React from 'react';
import { plantList } from '../datas/plantList';

const Categories = ({cat,Categories,updateCategories}) => {


    



const handleChange = (event)=> {
    updateCategories(event.target.value)
    console.log(event.target.value);
  }
    return (
        <div className='lmj-categories'>
        <select className="lmj-categories" value="default" onChange={handleChange}>
            <option value="">---</option>
            {cat.map((item,index) =>
             <option key={index} value={item}>{item}</option>
            )}
        </select>
        <button onClick={() => updateCategories('')}>Réinitialiser</button>
        </div>
    );
};

export default Categories;