import React, { useState } from 'react';
import './PlayerInput.css';

function PlayerInput({ onStart }) {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const handleStart = () => {
    if (playerX && playerO) {
      onStart({ playerX, playerO });
    }
  };

  return (
    <div className="player-input">
      <div>
        <label>
          Player X:
          <input type="text" value={playerX} onChange={(e) => setPlayerX(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Player O:
          <input type="text" value={playerO} onChange={(e) => setPlayerO(e.target.value)} />
        </label>
      </div>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
}

export default PlayerInput;
