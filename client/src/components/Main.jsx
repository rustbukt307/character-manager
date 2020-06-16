import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { getAllCharacters } from '../services/characters';
import { getAllCampaigns, createCampaign, deleteCampaign, updateCampaign } from '../services/campaigns';
import ShowCharacters from './ShowCharacters';
import ShowCampaigns from './ShowCampaigns';
import CreateCampaign from './CreateCampaign';
import UpdateCampaign from './UpdateCampaign';
import CampaignItem from './CampaignItem';
import CharacterItem from './CharacterItem';

export default class Main extends Component {
  state = {
    characters: [],
    campaigns: []
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.getCampaigns()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getCampaigns()
    }
  }

  // Characters

  getCharacters = async () => {
    const characters = await getAllCharacters();
    this.setState({ characters });
  }

  // Campaigns

  getCampaigns = async () => {
    const campaigns = await getAllCampaigns();
    this.setState({ campaigns });
  }

  postCampaign = async (campaignData) => {
    const newCampaign = await createCampaign(campaignData);
    this.setState(prevState => ({
      campaigns: [...prevState.campaigns, newCampaign]
    }))
  }

  // Our putCampaign method should follow a similar pattern that we're used to.
  // import notes: we need an id and formData for our api call
  // For the setState, reference the frontend-CRUD-design lesson
  putCampaign = async (id, campaignData) => {
    const updatedCampaign = await updateCampaign(id, campaignData);
    this.setState(prevState => ({
      campaigns: prevState.campaigns.map(campaign => campaign.id === id ? updatedCampaign : campaign)
    }))
  }

  destroyCampaign = async (id) => {
    await deleteCampaign(id);
    this.setState(prevState => ({
      campaigns: prevState.campaigns.filter(campaign => campaign.id !== id)
    }))
  }

  render() {
    return (
      <main>
        <Route path='/user/login' render={(props) => (
          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path='/user/register' render={(props) => (
          <Register
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
        <Route exact path='/characters' render={() => (
          <ShowCharacters
            characters={this.state.characters}
          />
        )} />
        <Route exact path='/campaigns' render={(props) => (
          <ShowCampaigns
            {...props}
            campaigns={this.state.campaigns}
            currentUser={this.props.currentUser}
            destroyCampaign={this.destroyCampaign}
          />
        )} />
        <Route path='/new/campaign' render={(props) => (
          <CreateCampaign
            {...props}
            postCampaign={this.postCampaign}
          />
        )} />
        <Route path='/campaign/:id/edit' render={(props) => {
          // instead of implicitly returning right away,
          // we are going to first grab the id of the campaign we want to update.
          // Then we are using the .find method to pull that campaign object
          // from our campaigns array in state. We can pass the whole campaign obj
          // to our UpdateCampaign component through props.
          const campaignId = props.match.params.id;
          const campaign = this.state.campaigns.find(campaign => campaign.id === parseInt(campaignId));
          return <UpdateCampaign
            {...props}
            campaign={campaign}
            putCampaign={this.putCampaign}
          />
        }} />
        <Route path='/campaigns/:id' render={(props) => {
          // similar to edit, we will grab the campaignId 
          // from match.params. This time, we will
          // get the campaign from the backend with an
          // api call in order to get the associated
          // characters
          const campaignId = props.match.params.id;
          return <CampaignItem
            campaignId={campaignId}
            characters={this.state.characters}
            currentUser={this.props.currentUser}
          />
        }} />
        <Route path='/characters/:id' render={(props) => {
          const characterId = props.match.params.id;
          return <CharacterItem
            characterId={characterId}
            currentUser={this.props.currentUser}
          />
        }}/>
      </main>
    )
  }
}
