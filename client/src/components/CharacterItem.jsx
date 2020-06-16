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
      <div className="char-sheet">
        {currentCharacter && (
          <>
            <h3 className="char-name">{currentCharacter.name}</h3>
            <div className="char-details">
              <h4>Experience Pts: </h4>
              <p>{currentCharacter.xp}</p>
              <h4>Level: </h4>
              <p>{currentCharacter.level}</p>
              <h4>Race: </h4>
              <p>{currentCharacter.race}</p>
              <h4>Class: </h4>
              <p>{currentCharacter.char_class}</p>
              <h4>Alignment: </h4>
              <p>{currentCharacter.alignment}</p>
            </div>
            <div className="stats">
              <h4>Strength: </h4>
              <p>{currentCharacter.str}</p>
              <h4>Dexterity: </h4>
              <p>{currentCharacter.dex}</p>
              <h4>Constitution: </h4>
              <p>{currentCharacter.con}</p>
              <h4>Intelligence: </h4>
              <p>{currentCharacter.int}</p>
              <h4>Wisdom: </h4>
              <p>{currentCharacter.wis}</p>
              <h4>Charisma: </h4>
              <p>{currentCharacter.cha}</p>
            </div>
            <div className="prof-bonus">
              <h4>Proficiency Bonus: </h4>
              <p>{currentCharacter.prof_bonus}</p>
            </div>
            <div className="hp">
              <h4>Current Hit Points: </h4>
              <p>{currentCharacter.hp}</p>
            </div>
            <div className="ac">
              <h4>Armor Class: </h4>
              <p>{currentCharacter.ac}</p>
            </div>
            <div className="hit-dice">
              <h4>Hit Dice: </h4>
              <p>{currentCharacter.hit_dice}</p>
            </div>
            <div className="attk-cast">
              <h4>Attacks & Casting: </h4>
              <p>{currentCharacter.attk_cast}</p>
            </div>
            <div className="inventory">
              <h4>Inventory: </h4>
              <p>{currentCharacter.inventory}</p>
            </div>
            <div className="feats">
              <h4>Skills & Feats: </h4>
              <p>{currentCharacter.feats}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default CharacterItem;
