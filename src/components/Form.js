import React,{useState} from 'react';
import Modal from './Modal.js'
const Form = ({concerts,setConcerts}) => {
    const [showAddMsg,setShowAddMsg]=useState(false)
    const [CheckVille, setCheckVille] = useState(false)
    const [CheckSalle, setCheckSalle] = useState(false)
    const [CheckDate, setCheckDate] = useState(false)
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        const newConcert= {"ville":e.target.ville.value, "departement":e.target.dep.value, "salle":e.target.salle.value, "date":e.target.date.value, "heure":e.target.heure.value}       
        setConcerts([newConcert,...concerts])
        setShowAddMsg(true)
        e.target.reset();
        setCheckDate(false)
        setCheckSalle(false)
        setCheckVille(false)
       
    }
    const closeAddMsg =()=>{
        setShowAddMsg(false)
    }
    
    const handleChangeVille =(e) =>{
        (e.target.value).length > 0 ?setCheckVille(true) : setCheckVille(false)
        
    }

    const handleChangeSalle =(e) =>{
        (e.target.value).length > 0 ?setCheckSalle(true) : setCheckSalle(false)
        
    }
    
    const mdl = React.createRef();
    
    return (
        
        
        <div className="Form">
        <Modal mdl={mdl} />
        <div className="content active">
				<form onSubmit={(e) => handleSubmit(e)} name="formNouvDate" className="ui form success" role="form">
					<div className="fields">
						<div className="twelve wide field">
							<label>Ville</label>
							<div className="ui icon input">
								<input onChange={(e)=>handleChangeVille(e)} name="ville" type="text" placeholder="Dans quelle ville le concert a-t-il lieu ?"
									required/>
								{(CheckVille)
                                ?<i className="checkmark icon"></i>
                                :<i className="warning icon"></i>
                                }
							</div>
						</div>
						<div className="four wide field">
							<label>Département</label>
							<input name="dep" type="text" placeholder="ex: 31"/>
						</div>
					</div>
					<div className="fields">
						<div className="seven wide field">
							<label>Lieu/Salle</label>
							<div className="ui icon input">
								<input onChange={(e)=>handleChangeSalle(e)} name="salle" type="text" placeholder="Dans quelle salle le concert a-t-il lieu ?"
									required/>
									{(CheckSalle)
                                ?<i className="checkmark icon"></i>
                                :<i className="warning icon"></i>
                                }
							</div>
						</div>
						<div className="five wide field">
							<label>Date</label>
							<div className="ui icon input">
								<input onInput={() =>setCheckDate(true)} name="date" type="date" placeholder="ex: 10/01/2018" required/>
								{(CheckDate)
                                ?<i className="checkmark icon"></i>
                                :<i className="warning icon"></i>
                                }

							</div>
						</div>
						<div className="four wide field">
							<label>Heure</label>
							<input name="heure" type="text" placeholder="ex: 21h30"/>
						</div>
					</div>
					{(showAddMsg) ? 
                    <div className="ui success message">
						<div className="header">Nouvelle date ajoutée</div>
						<i onClick={closeAddMsg} className="close icon"></i>
						<p>La nouvelle date a été ajoutée avec succès.</p>
					</div> :null}
					<input className="ui button" type="submit" value="Ajouter"/>
					&nbsp;<a id="aide">Aide</a>

				</form>
			</div>
		
        </div>
    );
};

export default Form;