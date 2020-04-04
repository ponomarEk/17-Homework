import React, { Component, useState } from 'react';
import Timer from './Components/Timer/timer';
import logo from './logo.svg';
import './App.css';

function App () {

  const[time]=useState(60000);
  const[autostart]=useState(true);
  const[step]=useState(2000);
    return (
      <div className="App">
        <Timer time={time} 
        autostart={autostart} 
        onTick={(time) => console.log("Осталось времени: " + time+" секунд!")}
        step={step} 
        onTimeEnd={() => console.log("Время вышло!")} 
        onTimeStart={(timeLeft) => console.log("Таймер запущен!")}
        onTimePause={(timeLeft) => console.log("Таймер на паузе!")}/>
      </div>
    );
  }

export default App;
