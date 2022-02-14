
import UnConcert from './UnConcert';
import dates from "../datas/dates.json"
import React,{useState} from 'react';

const Main = ({nbrConcert,setNbrConcert}) => {
    const [concerts,setConcerts] = useState(dates);

   const handleSupprConcert=(n)=>{
    console.log("Concert à suppr",n);
   }
   setNbrConcert(concerts.length)
    return (
        <div className="Main">
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Ville</th>
                        <th>Dép.</th>
                        <th>Lieu/Salle</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
			<tbody>
            {concerts.map((concert) =>(<UnConcert concerts={concerts} setConcerts={setConcerts} concert={concert} key={concert.ville} />))}
                
            </tbody>
            </table>
        </div>
        )
}

export default Main;