import React from 'react';
import CareScale from './CareScale';
import '../styles/PlantItem.css'


const handleClick = (plantName)=> {
    //onClick={() => handleClick(name)}
    alert(`Vous voulez achetez 1 ${plantName} ? `)
    //console.log("click");
}

const PlantItem = ({name,id,cover,light,water}) => {
    return (
        <li  className="lmj-plant-item" key={id}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name} 
            {/* {isSpecialOffer && <div className=".lmj-sales">Soldes</div>} */}
            <CareScale careType='light' scaleValue={light} />
            <CareScale careType='water' scaleValue={water}/>
        </li>
    );
};

export default PlantItem;