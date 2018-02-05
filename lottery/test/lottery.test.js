const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 is in caps is because it's a constructor function
const provider = ganache.provider();
const Web3 = require('web3');
const web3 = new Web3(provider);
const {interface,bytecode} = require('../compile');


let lottery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.Contract(JSON.parse(interface))
                        .deploy({data: bytecode})
                        .send({from: accounts[0], gas: '1000000'});
    lottery.setProvider(provider);
});

describe('Lottery Contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });

    it('Allows one account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length)
    });
});