import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {

 async componentDidMount() {

    constructor(props){
      super(props);

      this.state({manager})
    }

    const manager = await lottery.methods.manager().call();
    this.setState({manager});
  }

  render() {
    // web3.eth.getAccounts().then(console.log)
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
