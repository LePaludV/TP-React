import React,{useState} from 'react';




const UnConcert = ({concerts,setConcerts, concert }) => {
    const handleSuppr=(c) =>{
        const newList = concerts.filter((concert)=> concert.ville !== c)

        //console.log(c);
        //console.log(newList);
        setConcerts(newList)
    }
    return (
        
            <tr>
            <td>{concert.ville}</td>
            <td>{concert.departement}</td>
            <td>{concert.salle}</td>
            <td>{concert.date}</td>
            <td>{concert.heure}</td>
            <td>
                <button onClick={() => {handleSuppr(concert.ville)}}><i className="trash outline icon"></i></button>
            </td>
    
        </tr>
    )

    
};

export default UnConcert;