const Farmer = artifacts.require("Farmer"); 
const Butcher = artifacts.require("Butcher"); 
const chai = require("chai");
const assert = chai.assert;

let accounts;
let user1;
let user2;
let butcherAddress;
contract("Farmer", (accs) => {
    accounts = accs;
    user1 = accounts[0];
    user2 = accounts[1];
  });

  contract("Butcher", (accs) => {
    butcherAddress = accs[4];
  });

  it("...should create a new Cow.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 123;
    await instance.raiseCow(newCowId, {from: user1});
    let cow = await instance.cows(newCowId);
    assert.exists(cow);
  });

  it("...should put Cow up for sale.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 12345;
    await instance.raiseCow(newCowId);
    await instance.putCowUpForSale(newCowId);
    let cowState = await instance.getCowState(newCowId);
    let expectState = await instance.getForSale();
    assert.equal(cowState.toNumber(), expectState.toNumber());
  });
  
  it("...should transfer Cow to butcher.", async () => {
    let instance = await Farmer.deployed();
    let butcherContract = await Butcher.deployed();
    let cowId = 321;

    await instance.raiseCow(cowId);
    await instance.putCowUpForSale(cowId);
    await butcherContract.buyCow(cowId, {from: butcherAddress});
    await instance.transportCow(cowId);

    let cowState = await instance.getCowState(cowId);
    let expected = await instance.getTransoprted();
    let cowLocation = await instance.getCowLocation(cowId);
    let farmerAddress = await instance.getCowFarmerAddress(cowId);
    expect(cowLocation.toString()).to.not.equal(farmerAddress.toString());
    expect(cowState.toNumber()).to.equal(expected.toNumber());
  });
