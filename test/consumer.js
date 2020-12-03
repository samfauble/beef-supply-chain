 const Consumer = artifacts.require("Consumer"); 
const { expect } = require('chai');

let accountArr;
let farmerAcc;
let butcherAcc;
let consumerAcc;

/*
contract("Consumer", async accounts => {
  accountArr = accounts;
  farmerAcc = accounts[0];
  butcherAcc = accounts[1];
  consumerAcc = accounts[2];
});

it("...should transfer the ownership of the meat and transfer funds.", async () => {
  let instance = await Consumer.deployed();
  let cow = {
    id: 123,
    weight: 300,
    price: 10,
    farmer: farmerAcc,
    butcher: butcherAcc
  }
  let weightPurchased = 200;
  let beforeCowWeight = cow.weight;
  
  instance.buyMeat(cow.id, weightPurchased);
 
  let afterCowWeight = cow.weight;
  if(cow.weight == weightPurchased) {
    expect(instance.cows[cow.id]).to.not.exist();
  } else {
    expect(afterCowWeight).to.be.lessThan(beforeCowWeight);
  }
  expect(instance.cowsBoughtToWeight[cow.id]).to.equal(weightPurchased);
});

it("...should send a thank-you message to the Farmer and Butcher", async () => {
  let instance = await Consumer.deployed();
  instance.consumerAddress = consumerAcc;
  let message = 'That was yummy, thanks!!';
  let result = instance.thankProducers(message);

  expect(result).to.be.true();
});
*/