import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import PlayerStats from './components/playerStats/PlayerStats'
import TeamStats from './components/teamStats/TeamStats'
import ComparePlayers from './components/comparePlayers/ComparePlayers'
import CompareTeams from './components/compareTeams/CompareTeams'

function App() {
  return (
    <div className="app">
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
          <Route path="/comparePlayers">
            <ComparePlayers />
          </Route>
          <Route path="/compareTeams">
            <CompareTeams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
