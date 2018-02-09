//Test file for our factory and our Campaign ethereum contracts.

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    //get eth accounts
    accounts = await web3.eth.getAccounts();
    // create our campaign factory and deploy it
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                        .deploy({data: compiledFactory.bytecode })
                        .send({from: accounts[0], gas: 1000000 });

    //Create a campaign with its constructor method of minimum contribution set.
    await factory.methods.createCampaign('100').send({from: accounts[0], gas: '1000000'})
});