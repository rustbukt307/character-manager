import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div className="header-main">
        <h1>Character Manager</h1>
          <div className="auth">
            {
              props.currentUser
                ?
                <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></>
                :
                <Link to='/user/login'>Login/Register</Link>
            }
          </div>
      </div>
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
    </header>
  )
}
