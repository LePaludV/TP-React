import React, { useState } from "react";

const Title = ({nbrConcert}) => {
  

//   function concertAjouté() {
//     setnbrC(nbrC + 1);
//   }

  return (
    <div>
      <h1>
        Dates de concert
        <a ng-init="nbrConcert=0" className="ui circular label">
          {nbrConcert}
        </a>
      </h1>
    </div>
  );
};
export default Title;
