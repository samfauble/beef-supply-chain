const Butcher = artifacts.require("Butcher"); 
const { expect } = require('chai');

let owner;
let farmerAcc;
let butcherAcc;
let cowId;
let cow;
/*
contract("Butcher", async accounts => {
    owner = accounts[0];
    butcherAcc = accounts[1];
    farmerAcc = accounts[2];
    cowId = 1234;
  });

  it("...should become the new owner of the Cow, cow.state == Sold.", async () => {
    let instance = await Butcher.deployed();

    cow = {
        id: cowId,
        state: instance.ForSale,
        weight: 300,
        price: 10,
        farmer: farmerAcc,
      }

    instance.buyCow(cowId);

    expect(cow.state).to.equal(instance.Sold);
    expect(cow.butcher).to.exist();
  });

  it("...should confirm transfer of Cow and transfer funds.", async () => {
    let instance = await Butcher.deployed();

    cow = {
        id: cowId,
        state: instance.Transported,
        weight: 300,
        price: 10,
        farmer: farmerAcc,
        butcher: butcherAcc
      }

    let beforeFarmerAccount = farmerAcc.balance;
    let beforeButcherAccount = butcherAcc.balance;

    instance.confirmTransport(cowId);

    let afterFarmerAccount = farmerAcc.balance;
    let afterButcherAccount = butcherAcc.balance;

    expect(instance.butcherCows).to.include(cowId);
    expect(cow.state).to.equal(instance.TransportConfirmed);
    expect(afterFarmerAccount).to.equal(beforeFarmerAccount + cow.price);
    expect(afterButcherAccount).to.equal(beforeButcherAccount - cow.price);
  });

  it("...should change the Cow from animal to meat.", async () => {
    let instance = await Butcher.deployed();
    cow = {
        id: cowId,
        isMeat: false,
        state: instance.TransportConfirmed,
        weight: 300,
        price: 10,
        farmer: farmerAcc,
        butcher: butcherAcc
      }


    instance.butcherCows[cow.id] = cow;
    let beforeCowPrice = cow.price;
    let beforeCowWeight = cow.weight;

    instance.butcherCow(cowId);

    let afterCowPrice = cow.price;
    let afterCowWeight = cow.weight;

    expect(cow.state).to.equal(instance.Butchered);
    expect(cow.isMeat).to.be.true();
    expect(afterCowPrice).to.be.greaterThan(beforeCowPrice);
    expect(afterCowWeight).to.be.lessThan(beforeCowWeight);
    expect(instance.butcherCows[cow.id]).to.not.exist();
  });

  it("...should put the meat of the Cow up for sale.", async () => {
    let instance = await Butcher.deployed();

    cow = {
        id: cowId,
        isMeat: true,
        state: instance.Butchered,
        weight: 300,
        price: 10,
        farmer: farmerAcc,
        butcher: butcherAcc
      }
    
    instance.sellMeat(cowId);

    expect(cow.state).to.equal(instance.ForSale);
    expect(instance.meatForSale).to.include(cow.id);
  });
  */