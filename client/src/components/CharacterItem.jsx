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
            <h3>{currentCharacter.name}</h3>
            <h4>Race: </h4><p>{currentCharacter.race}</p>
            <h4>Class: </h4><p>{currentCharacter.char_class}</p>
            <h4>Level: </h4><p>{currentCharacter.level}</p>
            <h4>Alignment: </h4><p>{currentCharacter.alignment}</p>
            <h4>Experience Pts: </h4><p>{currentCharacter.xp}</p>
            <h4>Strength: </h4><p>{currentCharacter.str}</p>
            <h4>Dexterity: </h4><p>{currentCharacter.dex}</p>
            <h4>Constitution: </h4><p>{currentCharacter.con}</p>
            <h4>Intelligence: </h4><p>{currentCharacter.int}</p>
            <h4>Wisdom: </h4><p>{currentCharacter.wis}</p>
            <h4>Charisma: </h4><p>{currentCharacter.cha}</p>
            <h4>Proficiency Bonus: </h4><p>{currentCharacter.prof_bonus}</p>
            <h4>Current Hit Points: </h4><p>{currentCharacter.hp}</p>
            <h4>Armor Class: </h4><p>{currentCharacter.ac}</p>
            <h4>Hit Dice: </h4><p>{currentCharacter.hit_dice}</p>
            <h4>Attacks & Casting: </h4><p>{currentCharacter.attk_cast}</p>
            <h4>Inventory: </h4><p>{currentCharacter.inventory}</p>
            <h4>Skills & Feats: </h4><p>{currentCharacter.feats}</p>
          </>
        )}
      </div>
    );
  }
}

export default CharacterItem;
