import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import PlayerStats from './components/playerStats/PlayerStats'
import TeamStats from './components/teamStats/TeamStats'
import ComparePlayers from './components/comparePlayers/ComparePlayers'
import CompareTeams from './components/compareTeams/CompareTeams'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  
  return (
    <div className="app">
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
