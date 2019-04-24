import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
        <div className="ui cards">
          {this.renderAllPets()}
        </div>
      )
  }
  // complain that there's not enough micropigs
  renderAllPets = () => {return( this.props.pets.map(pet => {
    return (<Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />)
          }
        )
      )
  }
}

export default PetBrowser
