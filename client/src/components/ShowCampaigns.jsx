import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowCampaigns(props) {
  const { campaigns, currentUser, destroyCampaign, history } = props;
  return (
    <>
      <hr />
      <h3>Campaigns</h3>
      {
        campaigns.map(campaign => (
          <React.Fragment key={campaign.id}>
            {/* small change:  we made the p tags into links to the campaign item route */}
            <Link to={`/campaigns/${campaign.id}`}>{campaign.name}</Link>
            {
              currentUser && currentUser.id === campaign.user_id && (
                <>
                  {/* our edit button just needs to route us to the edit component */}
                  {/* we also need to interpolate the id in the route */}
                  <button onClick={() => history.push(`/campaign/${campaign.id}/edit`)}>edit</button>
                  <button onClick={() => destroyCampaign(campaign.id)}>delete</button>
                </>
              )
            }
            <br/>
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/new/campaign'><button>Create</button></Link>
    </>
  )
}
