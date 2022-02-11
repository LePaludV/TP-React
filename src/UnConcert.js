import React,{useState} from 'react';




const UnConcert = (props) => {

    const { concert } = props;

    return (
        
            <tr>
            <td>{concert.ville}</td>
            <td>{concert.departement}</td>
            <td>{concert.salle}</td>
            <td>{concert.date}</td>
            <td>{concert.heure}</td>
            <td>
                <i className="trash outline icon"></i>
            </td>
    
        </tr>
    )

    
};

export default UnConcert;