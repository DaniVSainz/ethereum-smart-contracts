//Test file for our factory and our Campaign ethereum contracts.

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

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
    factory.setProvider(provider);

    //Create a campaign with its constructor method of minimum contribution set.
   await factory.methods.createCampaign('100').send({from: accounts[0], gas: '1000000'});

   const addresses = await factory.methods.getDeployedCampaigns().call();
   campaignAddress = addresses[0];



    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
    campaign.setProvider(provider);

});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert(factory.options.address);
        assert(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });
    it('allows people to contribute money and makrs them as approvers', async () => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '200'
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        //If isContributor is true == the person has contributed
        assert(isContributor);
    })
});