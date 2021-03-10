import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './pages/home';

import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PageHome} />
      </Switch>
    </Router>
  );
}
