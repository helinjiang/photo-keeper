import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './pages/home';
import PageHelp from './pages/help';

import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={`/help`} component={PageHelp} />
        <Route path={`/`} component={PageHome} />
      </Switch>
    </Router>
  );
}
