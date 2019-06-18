import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      species: "",
      images: "",
      about: "",
      location: "",
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addPetCallback({
      name: this.state.name,
      species: this.state.species,
      images: this.state.images,
      about: this.state.about,
      location: this.state.location,
    });

    this.setState({
      name: '',
      species: '',
      images: '',
      about: '',
      location: '',
    });
  }

  render() {
    return (
        <form className="new-pet-form" onSubmit={this.handleSubmit}>
          <h3>Add a Pet</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              onChange={this.onChangeHandler}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="species">Species:</label>
            <input
              name="species"
              value={this.state.species}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="about">About:</label>
            <input
              name="about"
              value={this.state.about}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              name="location"
              value={this.state.location}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="images">Images:</label>
            <input
              name="images"
              value={this.state.images}
              onChange={this.onChangeHandler}
            />
          </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}


export default NewPetForm;