import UnConcert from "./UnConcert";
import React, { useState } from "react";

const Main = ({ concerts, setConcerts, setNbrConcert }) => {
    const [ShowSupprMsg, setShowSupprMsg] = useState(false)
    const closeShowMsg=()=>{
        setShowSupprMsg(false)
    }
  return (
    <div className="Main">
      {ShowSupprMsg ? (
        <div
          className="ui negative message"
        >
          <i onClick={closeShowMsg} className="close icon"></i>
          <div class="header">Date supprimée !</div>
        </div>
      ) : null}
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
          {concerts.map((concert, index) => (
            <UnConcert
              concerts={concerts}
              setConcerts={setConcerts}
              setNbrConcert={setNbrConcert}
              concert={concert}
              key={index}
              setShowSupprMsg={setShowSupprMsg}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
