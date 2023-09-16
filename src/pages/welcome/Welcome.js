import './Welcome.css';
import React, { useEffect } from 'react';

function Welcome() {
  
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');

      const xPosition = Math.random() * window.innerWidth;
      const yPosition = Math.random() * window.innerHeight;

      star.style.left = `${xPosition}px`;
      star.style.top = `${yPosition}px`;

      document.querySelector('.starry-night').appendChild(star);
    };

    const starInterval = setInterval(createStar, 500);

    return () => {
      clearInterval(starInterval);
    };
  }, []);

  return (
    <div className="body">
      <div className="starry-night"></div>
      <div className="container">
        <div><h1>Welcome to Tic Tac Toe</h1></div>
        <div className="Gamebutton">
          <a href='/Singleplayer'><button className="glow-on-hover" type="button">Single Player</button></a>
          <a href='/twoplayer'><button className="glow-on-hover" type="button">Two player</button></a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
