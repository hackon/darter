import React, {Component} from 'react';
import './App.css';
import CricketNumpad from './CricketNumpad';
import Darts from '../components/Darts';
import X01Score from '../components/X01Score';
import PlayerInput from '../components/PlayerInput';
import {calcValue} from '../utils/CricketDartsUtils';
import CricketScore from "../components/CricketScore";

function initialState() {
  return {
    value: '',
    darts: [],
    players: [],
    score: [],
    currentPlayer: '',
    interval: undefined,
    addPlayer: '',
    addPlayerEnabled: true
  };
}

class CricketGame extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = initialState();
    this.numpadSubmit = this.numpadSubmit.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleAddPlayerChange = this.handleAddPlayerChange.bind(this);
    this.handleDoneAddPlayer = this.handleDoneAddPlayer.bind(this);
  }

  numpadSubmit(dart) {
    clearInterval(this.state.interval);
    const {players, currentPlayer, darts, score} = this.state;
    const currentIndex = players.indexOf(currentPlayer);
    const preScore = [...score.slice(0, currentIndex)];
    const postScore = [...score.slice(currentIndex + 1)];
    const currentScore = score[currentIndex];
    const dartValue = calcValue(dart);
    const newPlayerScore = currentScore - dartValue;
    if (newPlayerScore === 0 && dart.charAt(0)==='D') {
      alert("Winner!!!!");
      this.setState(initialState());
      return;
    }
    const bust = newPlayerScore <= 1;
    if (bust) alert("Busted");
    const newScore = bust
      ? [...preScore,
        currentScore + darts.map(d => calcValue(d)).reduce((a,b) => a + b, 0),
        ...postScore]
      : [
        ...preScore,
        newPlayerScore,
        ...postScore
      ];

    const newPlayer = darts.length === 2;
    const newIndex = newPlayer ? (currentIndex + 1) % players.length : currentIndex;
    const newCurrentPlayer = newPlayer ? players[newIndex] : currentPlayer;
    const newInterval = newPlayer
      ? setInterval(() => this.setState(
        Object.assign(
          this.state,
          {darts: []}
        )
      ), 500)
      : undefined;


    const newDarts = darts.length === 3 ? [dart] : [...darts, dart];

    this.setState(
      Object.assign(
        this.state,
        {
          darts: newDarts,
          score: newScore,
          currentPlayer: newCurrentPlayer,
          interval: newInterval
        }
      )
    )
  }

  handleDoneAddPlayer(e) {
    e.preventDefault();
    this.setState(Object.assign(
      this.state,
      {
        addPlayerEnabled: this.state.players.length === 0,
        currentPlayer: this.state.players[0]
      }
    ));
    debugger;
  }

  handleAddPlayer(e) {
    e.preventDefault();
    const {addPlayer} = this.state;
    this.setState(
      Object.assign(
        this.state,
        {
          players: [...this.state.players, addPlayer],
          score: [...this.state.score, 301],
          addPlayer: '',
          currentPlayer: addPlayer
        }
      )
    );
  }

  handleAddPlayerChange(e) {
    const value = e.target.value;
    this.setState(Object.assign(
      this.state,
      {
        addPlayer: value,
      }
    ));
  }

  render() {
    const {players, score, currentPlayer, addPlayer, darts, addPlayerEnabled} = this.state;
    return (
      <div className="App">
        <CricketScore players={players} score={score} currentPlayer={currentPlayer}/>
        {addPlayerEnabled && <PlayerInput
          hint={'Add player'}
          value={addPlayer}
          handleClick={this.handleAddPlayer}
          handleChange={this.handleAddPlayerChange}
          handleDone={this.handleDoneAddPlayer}
          enableAdd={this.state.addPlayer.length > 0}
          enableDone={this.state.players.length > 1}
        />}
        <Darts darts={darts}/>
        {!addPlayerEnabled && <CricketNumpad submit={this.numpadSubmit}/>}
      </div>
    );
  }
}

export default CricketGame;
