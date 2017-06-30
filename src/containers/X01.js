import React, {Component} from 'react';
import './App.css';
import X01Numpad from './X01Numpad';
import Darts from '../components/Darts';
import Score from '../components/Score';
import PlayerInput from '../components/PlayerInput';
import {calcValue} from '../utils/Darts';

function initialState() {
  return {
    value: '',
    darts: [],
    players: [],
    score: [],
    currentPlayer: '',
    interval: undefined,
    addPlayer: '',
    addPlayerEnabled: true,
    input:''
  };
}

class X01 extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = initialState();
    this.numpadClick = this.numpadClick.bind(this);
    this.numpadSubmit = this.numpadSubmit.bind(this);
    this.numpadRevert = this.numpadRevert.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleAddPlayerChange = this.handleAddPlayerChange.bind(this);
    this.handleDoneAddPlayer = this.handleDoneAddPlayer.bind(this);
  }

  numpadClick(value) {
    this.setState({input: this.state.input + value});
  }

  numpadSubmit() {
    const input = this.state.input;
    clearInterval(this.state.interval);
    const {players, currentPlayer, darts, score} = this.state;
    const currentIndex = players.indexOf(currentPlayer);
    const preScore = [...score.slice(0, currentIndex)];
    const postScore = [...score.slice(currentIndex + 1)];
    const dartValue = calcValue(input);
    const currentScore = score[currentIndex];
    const newPlayerScore = currentScore - dartValue;
    if (newPlayerScore === 0 && input.charAt(0)==='D') {
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


    const newDarts = darts.length === 3 ? [input] : [...darts, input];

    this.setState(
      Object.assign(
        this.state,
        {
          darts: newDarts,
          score: newScore,
          currentPlayer: newCurrentPlayer,
          interval: newInterval,
          input: ''
        }
      )
    )
  }

  numpadRevert() {
    const input = this.state.input;
    const newInput = input.length > 0 ? input.slice(0, -1) : input;
    this.setState({input: newInput});
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
        <Score players={players} score={score} currentPlayer={currentPlayer}/>
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
        {!addPlayerEnabled && <X01Numpad
          value={this.state.input}
          click={this.numpadClick}
          submit={this.numpadSubmit}
          revert={this.numpadRevert}

        />}
      </div>
    );
  }
}

export default X01;
