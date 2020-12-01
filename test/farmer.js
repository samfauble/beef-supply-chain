const Farmer = artifacts.require("../contracts/Farmer.sol"); 
const { expect } = require('chai');

contract("Farmer", accounts => {
    let owner = accounts[0]
  });

  it("...should create a new Cow.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 123;
    instance.raiseCow(newCowId);
    expect(instance.farmerCows).to.include(newCowId);
    expect(instance.cows).to.include(newCowId);
  });

  it("...should put Cow up for sale.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 123;
    instance.raiseCow(newCowId);
    instance.putCowUpForSale(newCowId);
    expect(instance.cowsForSale).to.include(instance.cowsForSale[newCowId]);
  });
  
  it("...should transfer Cow to butcher.", async () => {
    let instance = await Farmer.deployed();
    let cowId = 123;
    instance.raiseCow(cowId);
    let cow = instance.cows[cowId];
    cow.state = instance.Sold;
    instance.transportCow(cowId);
    expect(cow.currentLocation).to.not.equal(instance.farmerAddresss);
    expect(cow.state).to.equal(instance.Transported);
  });
  