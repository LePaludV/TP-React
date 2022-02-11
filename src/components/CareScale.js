import React from 'react';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

const handleClick = (scaleValue,careType)=>{
    const type = careType ==='light' ? ("de lumière") : ("d'arrosage")
    var qte;
    switch (scaleValue) {
        case 2:
            qte="modérement"
            break;
        case 3:
            qte="beaucoup"
            break;
        default:
            qte="peu";
            }
    alert(`Cette plante requiert ${qte} ${type}`)
}
const CareScale = ({scaleValue, careType}) => {
    /* const scaleValue =props.scaleValue;
    const careType=props.careType;*/
    const range=[1,2,3]
    const scaleType= careType ==='light' ? (
        <img src={Sun} alt='sun-icon' />
    ) :(
        <img src={Water} alt='water-icon' />
    );
    return (
        <div onClick={() => handleClick(scaleValue,careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
};

export default CareScale;