const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 is in caps is because it's a constructor function
const provider = ganache.provider();
const Web3 = require('web3');
const web3 = new Web3(provider);
const {interface,bytecode} = require('../compile');
