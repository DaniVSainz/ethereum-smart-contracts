import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state= {manager: ''}
  // }
  //This is the same as above.
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager,players,balance});
  }

  onSubmit = async (event) => {
    //Prevents default html submit 
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Waiting for transaction to complete....'});

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({message: 'You have been successfully entered, good luck!'});
  };

  render() {
    // web3.eth.getAccounts().then(console.log)
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
        <p>There are currently {this.state.players.length} people entered.</p>
        <p>competing to win {web3.utils.fromWei(this.state.balance, 'ether')}</p>
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <p>Minimum amount is 0.11 ether</p>
            <input 
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value }) }
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />
        <h1>{this.state.message}</h1>

      </div>
    );
  }
}

export default App;
