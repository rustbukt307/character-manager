import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <h1>Character Manager</h1>
      {
        props.currentUser
          ?
          <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
          :
          <Link to='/user/login'>Login/Register</Link>
      }
      <hr />
      {
        props.currentUser && (
          <nav>
            <NavLink to="/campaigns">Campaigns</NavLink>
            {/* This should be on the campaign item's page */}
            {/* <NavLink to="/characters">Characters</NavLink> */}
          </nav>
        )
      }
    </div>
  )
}
