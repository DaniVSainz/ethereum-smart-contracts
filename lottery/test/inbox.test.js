const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 is in caps is because it's a constructor function
const provider = ganache.provider();
const Web3 = require('web3');
const web3 = new Web3(provider);
const {interface,bytecode} = require('../compile');


const INITIAL_MESSAGE = 'Hey There'
let accounts;
let inbox;
beforeEach(async () => {
    // Get a list of all accounts  
    // Use an account to deploy a contract

    // web3.eth.getAccounts()
    // .then(fetchedAccounts => {
    //     console.log(fetchedAccounts)
    // });

    accounts = await web3.eth.getAccounts();

   inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: [INITIAL_MESSAGE]})
    .send({from: accounts[0], gas: '1000000'})

    inbox.setProvider(provider);
});

describe('Inbox', ()=> {
    it('deploys a contract', () => {
        // asset.ok checks if the value exsists
        assert.ok(inbox.options.address);
    });

    it('Has a default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_MESSAGE)
    });

    it('Can change the message', async ()=> {
        const newMessage = 'new message';
        await inbox.methods.setMessage(newMessage).send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, newMessage);
    })
});
