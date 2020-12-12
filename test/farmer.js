const AccessControl = artifacts.require("AccessControl"); 
const Farmer = artifacts.require("Farmer"); 
const Butcher = artifacts.require("Butcher"); 
const chai = require("chai");
const assert = chai.assert;

let accounts;
let user1;
let user2;
let butcherAddress;
contract("Farmer", async (accs) => {
    accounts = accs;
    user1 = accounts[0];
    user2 = accounts[1];
    butcherAddress = accounts[4];
  });

  it("...should create a new Cow.", async () => {
    let accessControl = await AccessControl.deployed();
    let instance = await Farmer.deployed();
    let newCowId = 123;
    await accessControl.setFarmer(user1);


    await instance.raiseCow(newCowId, {from: user1});
    let cow = await instance.cows(newCowId);
    assert.exists(cow);
  });

  it("...should put Cow up for sale.", async () => {
    let accessControl = await AccessControl.deployed();
    let instance = await Farmer.deployed();
    let newCowId = 12345;
    let price = 10;
    await accessControl.setFarmer(user1);

    await instance.raiseCow(newCowId, {from: user1});
    await instance.putCowUpForSale(newCowId, price, {from: user1});
    let cowState = await instance.getCowState(newCowId);
    let expectState = await instance.getForSale();
    assert.equal(cowState.toNumber(), expectState.toNumber());
  });
  
  it("...should transfer Cow to butcher.", async () => {
    let instance = await Farmer.deployed();
    let butcherContract = await Butcher.deployed();
    let cowId = 321;
    let price = 0;
    await instance.setFarmer(user1);
    await instance.setButcher(butcherAddress);

    await instance.raiseCow(cowId, {from: user1});
    await instance.putCowUpForSale(cowId, price, {from: user1});
    await instance.setCowState(cowId, 2);
    await instance.setCowButcher(cowId, {from: butcherAddress});
    await instance.transportCow(cowId, {from: user1});

    let cowState = await instance.getCowState(cowId);
    let expected = await instance.getTransoprted();
    let cowLocation = await instance.getCowLocation(cowId);
    let farmerAddress = await instance.getCowFarmerAddress(cowId);
    expect(cowLocation.toString()).to.not.equal(farmerAddress.toString());
    expect(cowState.toNumber()).to.equal(expected.toNumber());
  });
