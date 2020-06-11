import React, { Component } from 'react'

export default class CreateCampaign extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state;
    const { postCampaign, history } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        postCampaign(this.state);
        history.push('/campaigns');
        this.setState({
          name: ""
        })
      }}>
        <hr />
        <h3>Create Campaign</h3>
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
