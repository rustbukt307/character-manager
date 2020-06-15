import React, { Component } from 'react';
import {getOneCharacter} from "../services/characters.js"

class CharacterItem extends Component {

  state = {
    currentCharacter: null
  }

  componentDidMount() {
    this.getCharacter()
  }

  getCharacter = async () => {
    const currentCharacter = await getOneCharacter(this.props.characterId)
    this.setState({currentCharacter})
  }


  render() {
    const {currentCharacter} = this.state
    return (
      <div>
        {currentCharacter && (
          <>
            <div>{currentCharacter.name}</div>
          </>
        )}
      </div>
    );
  }
}

export default CharacterItem;
