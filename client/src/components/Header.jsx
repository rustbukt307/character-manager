import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div className="header-main">
      {
        props.currentUser && (
          <nav className="viewCamp">
            <NavLink to="/campaigns">View Campaigns</NavLink>
          </nav>
        )
      }
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
      
    </header>
  )
}
