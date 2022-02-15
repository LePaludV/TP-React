import React from 'react';




const UnConcert = ({concerts,setConcerts, concert,setShowSupprMsg }) => {
    const handleSuppr=(c) =>{
        const newList = concerts.filter((concert)=> concert !== c)
        //console.log(c);
        //console.log(newList);
        setConcerts(newList)
        setShowSupprMsg(true)
    }
    return (
        
            <tr>
            <td>{concert.ville}</td>
            <td>{concert.departement}</td>
            <td>{concert.salle}</td>
            <td>{concert.date}</td>
            <td>{concert.heure}</td>
            <td>
                <span onClick={() => {handleSuppr(concert)}}><i className="trash outline icon"></i></span>
            </td>
    
        </tr>
    )

    
};

export default UnConcert;