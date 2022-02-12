import React, { useState } from "react";

const Exo3 = () => {
    const [Poc, setPoc] = useState(0)
    const handlePoc= ()=>{
        setPoc(Poc+1)
    }
  return (
    <div className="Exo3">
      <button onClick={handlePoc} class="ui button">
        <i class="icon legal"></i>
      </button>

      <div class="ui horizontal statistic">
        <div class="value">{Poc}</div>
        <div class="label">Pocs</div>
      </div>
    </div>
  );
};

export default Exo3;
