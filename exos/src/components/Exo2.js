import React, { useState,useEffect } from 'react';

const Exo2 = () => {
    const [date,setDate]=useState('')
    const [name,setName]=useState('Anonyme')
    useEffect(() => {
        const d=new Date()
        setDate(d.getHours()+":"+d.getMinutes());
    }, [])
    
    return (
        <div className="Exo2">
            <div class="ui message">
                <div class="header">
                Rapport de connexion
                </div>
                <p>{name} s'est connecté à {date} </p>
            </div>
        </div>
    );
};

export default Exo2;