import React, { useState } from "react";

const Title = () => {
  const [nbrC, setnbrC] = useState(0);

//   function concertAjouté() {
//     setnbrC(nbrC + 1);
//   }

  return (
    <div>
      <h1>
        Dates de concert
        <a ng-init="nbrConcert=0" className="ui circular label">
          {nbrC}
        </a>
      </h1>
    </div>
  );
};
export default Title;
