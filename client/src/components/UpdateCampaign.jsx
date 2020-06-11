import React, { Component } from 'react'

export default class UpdateCampaign extends Component {
  state = {
    name: ""
  }

  // Our update component is very similar to our Create
  // component except that we have additional methods to
  // set the form data for the item in state that we want to update.

  // componentDidMount will set our form data when the component renders
  // however if we refresh the page on the form, the campaign wont exist yet.
  // This is why we only setCampaignForm inside of the conditional.
  componentDidMount() {
    if (this.props.campaign) {
      this.setCampaignForm();
    }
  }
  
  // componentDidUpdate only gets triggered when we refresh the page on the form.
  // the campaign props wont be there when the component first mounts but will
  // "arrive" a moment later. componentDidUpdate will see this and then setCampaignForm.
  componentDidUpdate(prevProps) {
    if (prevProps.campaign !== this.props.campaign) {
      this.setCampaignForm();
    }
  }

  // setCampaignForm just grabs the campaign passed from props and sets state
  setCampaignForm = () => {
    const { name } = this.props.campaign;
    this.setState({ name })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state;
    const { putCampaign, history, campaign } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        putCampaign(campaign.id, this.state);
        history.push('/campaigns');
        this.setState({
          name: ""
        })
      }}>
        <hr />
        <h3>Update Campaign</h3>
        <label htmlFor="name">Name:</label>
        <input
          id="id"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
