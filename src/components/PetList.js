import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';



const PetList = (props) => {
  const petList = props.pets.map((pet, i) => {
    return (<PetCard
            key={i}
            id={pet.id}
            name={pet.name}
            species={pet.species}
            about={pet.about}
            location={pet.location}
            selectPetCallback = {props.selectPetCallback}
            removePetCallback = {props.removePetCallback}
          />
        )
  });

  return (
    <div className="card-group">
      { petList }
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
  onRemovePet: PropTypes.func,
};

export default PetList;
