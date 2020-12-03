const AccessControl = artifacts.require("AccessControl"); 
const { expect } = require('chai');

let accountsArr;
/*
contract("AccessControl", async accounts => {
    accountsArr = accounts;
});

  it("...should set user to be a Farmer.", async () => {
    let owner = accountsArr[0];
    let user2 = accountsArr[1];
    let instance = await AccessControl.deployed();
    instance.setFarmer(user2, {from: owner});
    expect(instance.farmers).to.include(user2);
  });

  it("...should set user to be a Butcher.", async () => {
    let owner = accountsArr[0];
    let user2 = accountsArr[1];
    let instance = await AccessControl.deployed();
    instance.setButcher(user2, {from: owner});
    expect(instance.butchers).to.include(user2);
  });

  it("...should set user to be a Consumer.", async () => {
    let owner = accountsArr[0];
    let user2 = accountsArr[1];
    let instance = await AccessControl.deployed();
    instance.setConsumer(user2, {from: owner});
    expect(instance.consumers).to.include(user2);
  });
  */