import './Welcome.css';
import React from 'react';

function Welcome() {
  return (
    <div class="body">
    <div class="container">
        <div><h1>Welcome to Tic Tac Toe</h1></div>
        <div class="Gamebutton">
        <a href='/Singleplayer'><button class="glow-on-hover" type="button">Single Player</button></a>
        <a href='/twoplayer'><button class="glow-on-hover" type="button">Two player</button></a>
        </div>
        
        </div>
    </div>
  );
}

export default Welcome;
