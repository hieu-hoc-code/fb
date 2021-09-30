import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from '../components/home/Home'
import Watch from '../components/watch/Watch'
import Page from '../components/page/Page'
import Marketplace from '../components/marketplace/Marketplace'
import Group from '../components/group/Group'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/page" component={Page} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/marketplace" component={Marketplace} />
        <Route exact path="/group" component={Group} />
      </div>
    );
  }
}

export default Navigation;