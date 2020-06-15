import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div className="header-main">
        <h1>
          <Link to='/'>CHARACTER MANAGER</Link>
        </h1>
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
      {
        props.currentUser && (
          <nav>
            <NavLink to="/campaigns">View Campaigns</NavLink>
            {/* This should be on the campaign item's page */}
            {/* <NavLink to="/characters">Characters</NavLink> */}
          </nav>
        )
      }
    </header>
  )
}
