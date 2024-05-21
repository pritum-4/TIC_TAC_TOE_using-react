// src/Game.js
import React, { useState } from 'react';
import Board from './Board';
import PlayerInput from './PlayerInput';
import './Game.css';

function Game() {
  const [players, setPlayers] = useState(null);

  const handleStart = ({ playerX, playerO }) => {
    setPlayers({ playerX, playerO });
  };

  return (
    <div className="game">
        <h1>TIC TAC TOE</h1>
      {!players ? (
        <PlayerInput onStart={handleStart} />
      ) : (
        <div className="game-board">
          <Board players={players} />
        </div>
      )}
    </div>
  );
}

export default Game;
