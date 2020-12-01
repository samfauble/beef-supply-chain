const Core = artifacts.require("../contracts/Core.sol");
const { expect } = require('chai'); 

let owner;
let account2;
contract("Core", accounts => {
    owner = accounts[0];
    account2 = accounts[1];
  });

  it("...should update the contract Id.", async () => {
    let instance = await Core.deployed();
    instance.upgrade(account2);
    expect(instance.owner).to.equal(account2, "not the correct contract Id");
  });

  it("...should change the contract owner.", async () => {
    let instance = await Core.deployed();
    instance.ownable(owner);
    expect(instance.owner).to.equal(owner, "not the correct owner");
  });
  