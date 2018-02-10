import web3 from './web3';
import compiledContract from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(compiledContract.interface),
    '0x972aDF6B99715FE020c35a6d907324309dAb0e83'
);

export default instance;