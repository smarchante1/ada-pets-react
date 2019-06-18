import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
      message: '',
    };
  }


  onSelectPet = (petId) => {
    console.log(petId)    
    const selectedPet = this.state.petList.find((selectedPet) => {
      return selectedPet.id === petId;
    });

    this.setState({
      currentPet: selectedPet,
    })
  }

  onRemovePet = (petId) => {
    const list = this.state.petList
  
    let petIndex = list.findIndex(pet => pet.id === petId )

    console.log(petIndex)
    list.splice(petIndex, 1)

    this.setState({
      petList: list,
      currentPet: undefined,
    })
    console.log(this.state.petList)
  }

  addPet = (pet) => {
    const pets = this.state.petList;
    pets.push(pet);
    this.setState({
      petList: pets,
      message: `${pet.name} is has been added`,
    });
  }
  

  render() {
    const { currentPet } = this.state;
    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
        <section className="pet-list-wrapper">
          { this.state.currentPet ? <PetDetails currentPet={ currentPet } /> : '' }
          <PetList pets={this.state.petList} selectPetCallback= {this.onSelectPet} removePetCallback={this.onRemovePet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
          <NewPetForm addPetCallback= {this.addPet}/>
        </section>
      </main>
    );
  }
}

export default App;
