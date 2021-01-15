import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import PlayerStats from './components/playerStats/PlayerStats'
import TeamStats from './components/teamStats/TeamStats'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/playerStats">
          <PlayerStats />
        </Route>
        <Route path="/teamStats">
          <TeamStats />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
