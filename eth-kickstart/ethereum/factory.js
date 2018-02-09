import web3 from './web3';
import compiledContract from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(compiledContract.interface),
    '0xbcc3c2AB53AE3cDAB814C9C4A3c00c51Ff8e7761'
);

export default instance;