const Core = artifacts.require("Core");
const Farmer = artifacts.require("Farmer");
const { expect } = require('chai'); 

let owner;
let account2;
let farmer;

contract("Core", accounts => {
    owner = accounts[0];
    account2 = accounts[1];
  });

contract("Farmer", accounts => {
  farmer = accounts[5];
  });

  it("...should pause the supply chain for a specific cow.", async () => {
    let instance = await Core.deployed();
    let farmerContract = await Farmer.deployed();
    let cowId = 222;
    await farmerContract.raiseCow(cowId);
    let isPaused = await instance.getCowIsPaused(cowId);
    expect(isPaused).to.be.false;
    await instance.pause(cowId);
    let isPausedAfter = await instance.getCowIsPaused(cowId);
    expect(isPausedAfter).to.be.true;
  });

  it("...should change the contract owner.", async () => {
    let instance = await Core.deployed();
    let owner1 = await instance.getOwner();
    await instance.ownable({from: account2});
    let owner2 = await instance.getOwner();
    expect(owner2).to.equal(account2, "not the correct owner");
    expect(owner1).to.not.equal(owner2);
  });
