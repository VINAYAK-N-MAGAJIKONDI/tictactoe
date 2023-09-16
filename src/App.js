import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game2 from './pages/player2/game2';
import Game1 from './pages/player1/game';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/Twoplayer" component={Game2} />
        <Route path="/Singleplayer" component={Game1} />
      </Switch>
    </Router>
  );
}

export default App;
