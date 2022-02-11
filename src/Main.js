
import UnConcert from './UnConcert';
import dates from "./dates.json"
import React,{useState} from 'react';

const Main = () => {
    const [data,setData] = useState(dates);

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
            {data.map((concert) => (<UnConcert concert={concert} key={concert.ville} />))}
                
            </tbody>
            </table>
        </div>
        )
}

export default Main;