import React,{useState} from 'react';

const Exo1 = () => {
const [Input, setInput] = useState('');
    return (
        <div className="Exo1">
            <div className="ui input">
            <input onChange={(event)=>setInput(event.target.value)}type="text" placeholder="Entrer un nom"/>
            </div>

            <h1>{Input}</h1>
            <p>{Input.length} caractères</p>
        </div>
    );
};

export default Exo1;