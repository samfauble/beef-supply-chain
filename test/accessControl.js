const AccessControl = artifacts.require("AccessControl"); 
const { expect } = require('chai');

let owner;
let user2;

contract("AccessControl", accounts => {
    owner = accounts[0];
    user2 = accounts[1];
});

  it("...should set user to be a Farmer.", async () => {
    let instance = await AccessControl.deployed();
    await instance.setFarmer(user2);

    let actorType = await instance.getUserType(user2);
    let expectedType = await instance.getFarmer();
    expect(actorType.toNumber()).to.equal(expectedType.toNumber());
  });

  it("...should set user to be a Butcher.", async () => {
    let instance = await AccessControl.deployed();
    await instance.setButcher(user2);

    let actorType = await instance.getUserType(user2);
    let expectedType = await instance.getButcher();
    expect(actorType.toNumber()).to.equal(expectedType.toNumber());
  });

  it("...should set user to be a Consumer.", async () => {
    let instance = await AccessControl.deployed();
    await instance.setConsumer(user2);

    let actorType = await instance.getUserType(user2);
    let expectedType = await instance.getConsumer();
    expect(actorType.toNumber()).to.equal(expectedType.toNumber());
  });
  