 const Consumer = artifacts.require("Consumer"); 
 const AccessControl = artifacts.require("AccessControl"); 
 const Butcher = artifacts.require("Butcher"); 
 const Farmer = artifacts.require("Farmer"); 
const { expect } = require('chai');

let accountArr;
let farmerAcc;
let butcherAcc;
let consumerAcc;


contract("Consumer", async accounts => {
  accountArr = accounts;
  farmerAcc = accounts[0];
  butcherAcc = accounts[1];
  consumerAcc = accounts[2];
});

it("...should transfer the ownership of the meat and transfer funds.", async () => {
  let instance = await Consumer.deployed();
  let farmer = await Farmer.deployed();
  let cowId = 444;
  let weightPurchased = 200;
  let initialWeight = 500;
  let price = 0;
  await instance.setConsumer(consumerAcc);
  
  await farmer.raiseCow(cowId, {from: farmerAcc});
  await instance.setCowState(cowId, 1);
  await instance.setCowIsMeat(cowId);
  await instance.setCowWeight(cowId, initialWeight);

  let beforeCowWeight = await instance.getCowWeight(cowId);
  expect(beforeCowWeight.toNumber()).to.equal(initialWeight);

  await instance.setCowPrice(cowId, price);
  await instance.buyMeat(butcherAcc, cowId, weightPurchased, {from: consumerAcc});
 
  let afterCowWeight = await instance.getCowWeight(cowId);
  let id = await instance.getCowId(cowId);
  let consumerMeat = await instance.getCowMeat(cowId, {from: consumerAcc});
  if(afterCowWeight == weightPurchased) {
    expect(id).to.not.exist;
  } else {
    expect(afterCowWeight.toNumber()).to.be.lessThan(beforeCowWeight.toNumber());
  }
  expect(consumerMeat.toNumber()).to.equal(weightPurchased);
});