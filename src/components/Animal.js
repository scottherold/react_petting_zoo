import React from 'react';
import './Animal.css';

// Creates Animal object
const Animal = (props) => {
    // the onPetAnimal() function can be passed to an event handler, like onClick and is triggered by using props
    // Information can be sent back to the parent by sending back an argument in the function.
    return (
        <div className="animal_card">
            <h2 class="border-bottom mb-4 pb-2">{props.name}</h2>
            <button onClick={() => props.onPetAnimal(props.name)} className="btn btn-primary">{`Pet the ${props.name}`}</button>
        </div>
    );
}

export default Animal;