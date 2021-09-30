import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.scss'

import logo from '../../assets/facebook-logo.png'
import Ava from '../../assets/avatar.jpg'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="title-name">
          <img src={logo} alt="logo-fb" />
          <div className="input-search">
            <i className="fa fa-search" />
            <input type="text" id="search" placeholder="Tìm kiếm trên Facebook"></input>
          </div>
        </div>
        <div className="menu">
          <div className="menu-content">
            <NavLink activeClassName="show" to="/home"><i className="fa fa-home" /></NavLink>
            <NavLink activeClassName="show" to="/page"><i className="fa fa-bookmark-o" /></NavLink>
            <NavLink activeClassName="show" to="/watch"><i className="	fa fa-youtube-play" /></NavLink>
            <NavLink activeClassName="show" to="/marketplace"><i className="fa fa-train" /></NavLink>
            <NavLink activeClassName="show" to="/group"><i className="fa fa-users" /></NavLink>
          </div>
        </div>
        <div className="user-setting">
          <div className="user">
            <img src={Ava} alt="avatar"></img>
            <span>Minh</span>
          </div>
          <div className="menu-setting">
            <i className="fa fa-navicon" />
          </div>
          <div className="menu-setting">
            <i className="fa fa-commenting" />
          </div>
          <div className="menu-setting">
            <i className="fa fa-bell"/>
          </div>
          <div className="menu-setting">
            <i className="fa fa-sort-down" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;