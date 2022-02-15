import React from 'react';

const Modal = ({mdl}) => {
console.log(mdl);

    
    return (
        
        <div className="ui modal">
		<i className="close icon"></i>
		<div className="header">
			Aide
		</div>
		<div className="content">
			<div className="description">
				<span><p>Cette application permet de gérer une liste de dates de concert</p>
<p>Pour ajouter une nouvelle date de concert, remplissez le formulaire et cliquez sur le bouton 'Ajouter'. La nouvelle date apparaît à la suite des autres dans le tableau récapitulatif.</p>
<p>Pour supprimer une date, directement à partir du tableau, cliquez sur le l'icône de suppression en face de la date que vous désirez supprimer.</p>
</span>
			</div>
		</div>
		<div className="actions">
			<div className="ui positive right labeled icon button">
				J'ai compris
				<i className="checkmark icon"></i>
			</div>
		</div>
	</div> 
    );
};

export default Modal;