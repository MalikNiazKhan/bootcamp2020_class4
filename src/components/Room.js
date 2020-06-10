import React, { useState } from 'react';
import './Room.css';

function Room(){
  let [isLit, setLit] = useState(false);
  let [temperature, setTemperature] = useState(22);
  return (
    <div className={`room ${isLit? 'lit' : 'dark'}`}>

    <br />

    <button onClick={() => setLit(true)}> ON </button>
    <button onClick={() => setLit(false)}> OFF </button>
    <button onClick={() => setTemperature(++temperature)}> + </button>
    <button onClick={() => setTemperature(--temperature)}> - </button>

    <h3>The Room is {isLit?'Lit':'Dark'} and Temporature is {temperature}℃ </h3>

    </div>
  )
}

export default Room;
