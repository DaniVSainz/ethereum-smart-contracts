const assert = require('assert');
const ganache = require('ganache-cli');
// Web3 is in caps is because it's a constructor function
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

class Car {
    park() {
        return 'stopped';
    }

    vroom(){
        return 'vroom';
    }
}

describe('Car', () => {
    it('can park', ()=> {
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    })
});