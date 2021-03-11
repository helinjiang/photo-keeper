import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './pages/home/index';
import PageHelp from './pages/help/index';

import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/help" component={PageHelp} />
        <Route exact path="/" component={PageHome} />
      </Switch>
    </Router>
  );
}
