import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getOneCampaign, campaignToCharacter } from '../services/campaigns';

export default class CampaignItem extends Component {
  // We need to store the campaign in state once we make our api.
  // Additionally we have a form in this component so we will
  // need some data for that form in state.
  state = {
    campaign: null,
  }

  // setCharacter will make an api call with the id that we passed from props
  // this it will set state. We're only calling setCharacter on componentDidMount
  componentDidMount() {
    this.setCampaign()
  }

  setCampaign = async () => {
    const campaign = await getOneCampaign(this.props.campaignId);
    this.setState({ campaign })
  }

  // handleChange and handleSubmit for our select dropdown menu
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      characterId: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const campaign = await campaignToCharacter(this.state.characterId, this.state.campaign.id);
    // Since we return the whole campaign from the backend, we can just replace
    // the whole campaign object in state.
    this.setState({ campaign });
  }

  render() {
    const { campaign } = this.state;
    const { characters, currentUser } = this.props;
    return (
      <div className="campaign-details">
        {
          // Since we have to wait on the api call to return to get our campaign item
          // we need to add a guard operator here. Then we simply display the campaign
          // and map over it's characters
          campaign && (
            <>
              <h3>{campaign.name}</h3>
              {campaign.characters.map(character => (
                <Link key={character.id} to={`/characters/${character.id}`}>{character.name}</Link>
              ))}
              {/* This is our form for the select dropdown */}
              {/* One note about dropdowns in react: the handleChange wont */}
              {/* setState until a change to the dropdown is made */}
              {/* a simple work around is to make a hard coded first option for the dropdown */}
              {
                currentUser && currentUser.id === campaign.user_id && (
                  <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                      <option>--Select a character--</option>
                      {characters.map(character => (
                        <option value={character.id} key={character.id}>{character.name}</option>
                      ))}
                    </select>
                    <button>Add a Character</button>
                  </form>
                )
              }
            </>
          )
        }
      </div>
    )
  }
}