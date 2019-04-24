import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

// why the friends doesn't a constant work here
  fetchUrl = () => { return (this.state.filters.type === 'all') ? '/api/pets' : `/api/pets?type=` + this.state.filters.type}

  onChangeType = (event) => {
    this.setState({filters: {type: event.target.value}})
  }

  onAdoptPet = (event) => {
    console.log(event.target.id)
    const pet = this.state.pets.find(pet=> pet.id=== event.target.id)
    pet.isAdopted = true
    const index = this.state.pets.findIndex(pet => pet.id === event.target.id)
    const pets = this.state.pets
    pets[index] = pet
    this.setState({pets: pets})

    // const newPet =  {...pet, isAdopted: true}
    // setState([...this.state.pets], {...pet}])



    // this.setState({})
  }

  onFindPetsClick = (event) => {
    fetch(this.fetchUrl())
    .then(response => response.json())
    .then(myJson => this.setState({pets: myJson}))
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
