import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowCampaigns(props) {
  const { campaigns, currentUser, destroyCampaign, history } = props;
  return (
    <>
    <hr/>
    <h3>CAMPAIGNS</h3>
      <div className="campaign-list">
        {
          campaigns.map(campaign => (
            <React.Fragment key={campaign.id}>
              <Link to={`/campaigns/${campaign.id}`}>{campaign.name}</Link>
              {
                currentUser && currentUser.id === campaign.user_id && (
                  <>
                    {/* our edit button just needs to route us to the edit component */}
                    {/* we also need to interpolate the id in the route */}
                    <button onClick={() => history.push(`/campaign/${campaign.id}/edit`)}>Edit</button>
                    <button onClick={() => destroyCampaign(campaign.id)}>Delete</button>
                  </>
                )
              }
              <br />
            </React.Fragment>
          ))
        }
      </div>
      <br />
      <Link to='/new/campaign'><button>Create</button></Link>
    </>
  )
}
