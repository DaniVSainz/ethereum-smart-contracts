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

    it('Allows multiple accounts to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });
        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length)
    });

    it('Requires a minimum amount of ether to enter', async () =>{
        try {
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 200 //this corresponds to 200 wei, much less than the minimum required.
            });
            //Failsafe, if an error is not thrown assert false will be thrown.
            assert(false);
        } catch (err) {
            //ensure we catch an error as expected
            assert(err);
        }

    })

});