const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'park disagree planet pledge stamp wood globe indicate either cry anchor sudden',
    'https://rinkeby.infura.io/Xl5rmlE4KRpT4dcuJpBl'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
                .deploy({data: bytecode, arguments: ['Testing our deployment']})
                .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};

deploy();