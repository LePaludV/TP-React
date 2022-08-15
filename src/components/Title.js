import React from "react";

const Title = ({concerts}) => {
  

//   function concertAjouté() {
//     setnbrC(nbrC + 1);
//   }

  return (
    <div>
      <h1>
        Dates de concert
        <a className="ui circular label">
          {concerts.length}
        </a>
      </h1>
    </div>
  );
};
export default Title;
