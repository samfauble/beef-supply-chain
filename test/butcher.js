const Butcher = artifacts.require("Butcher"); 
const Farmer = artifacts.require("Farmer"); 
const { expect } = require('chai');

let owner;
let farmerAcc;
let butcherAcc;

contract("Butcher", async accounts => {
    owner = accounts[0];
    butcherAcc = accounts[5];
    farmerAcc = accounts[3];
  });
  

  it("...should become the new owner of the Cow, cow.state == Sold.", async () => {
    let instance = await Butcher.deployed();
    let farmer = await Farmer.deployed();
    let cowId = 12348754;
    let price = 0;
    await instance.setFarmer(farmerAcc);
    await instance.setButcher(butcherAcc);

    await farmer.raiseCow(cowId, {from: farmerAcc});
    await farmer.putCowUpForSale(cowId, price, {from: farmerAcc});
    await instance.buyCow(cowId, {from: butcherAcc});

    let state = await instance.getCowState(cowId);
    let expectedState = await instance.getSold();
    let butcher = await instance.getCowButcherAddress(cowId);
    expect(state.toNumber()).to.equal(expectedState.toNumber());
    expect(butcher).to.exist;
  });

  it("...should confirm transfer of Cow.", async () => {
    let instance = await Butcher.deployed();
    let farmer = await Farmer.deployed();
    let cowId = 1432;
    let price = 0;
    await instance.setFarmer(farmerAcc);
    await instance.setButcher(butcherAcc);
   
    await farmer.raiseCow(cowId, {from: farmerAcc});
    await farmer.putCowUpForSale(cowId, price, {from: farmerAcc});
    await instance.buyCow(cowId, {from: butcherAcc});
    let isConfirmed = await instance.confirmTransport(farmerAcc, cowId, {from: butcherAcc});

    let cowState = await instance.getCowState(cowId);
    let expectedState = await instance.getTransportConfirmed();

    expect(cowState.toNumber()).to.equal(expectedState.toNumber());
  });
 

  it("...should change the Cow from animal to meat.", async () => {
    let instance = await Butcher.deployed();
    let farmer = await Farmer.deployed();
    let cowId = 303;
    let price = 10;
    let weight = 50;
    await instance.setFarmer(farmerAcc);
    await instance.setButcher(butcherAcc);

    await farmer.raiseCow(cowId, {from: farmerAcc});
    await instance.setCowPrice(cowId, price);
    await instance.setCowWeight(cowId, weight)
    await instance.setCowState(cowId, 4);
    let beforeCowWeight = await instance.getCowWeight(cowId);
    let beforeCowPrice = await instance.getCowPrice(cowId);

    await instance.butcherCow(cowId, {from: butcherAcc});

    let afterCowWeight = await instance.getCowWeight(cowId);
    let afterCowPrice = await instance.getCowPrice(cowId);
    let cowState = await instance.getCowState(cowId);
    let butchered = await instance.getButchered();
    let isMeat = await instance.getCowIsMeat(cowId);

    expect(cowState.toNumber()).to.equal(butchered.toNumber());
    expect(isMeat).to.be.true;
    expect(afterCowPrice.toNumber()).to.be.greaterThan(beforeCowPrice.toNumber());
    expect(afterCowWeight.toNumber()).to.be.lessThan(beforeCowWeight.toNumber());
  });


  it("...should put the meat of the Cow up for sale.", async () => {
    let instance = await Butcher.deployed();
    let farmer = await Farmer.deployed();
    let cowId = 7547;
    await instance.setFarmer(farmerAcc);
    await instance.setButcher(butcherAcc);

    await farmer.raiseCow(cowId, {from: farmerAcc});
    await instance.setCowState(cowId, 5);
    
    await instance.sellMeat(cowId, {from: butcherAcc});

    let cowState = await instance.getCowState(cowId);
    let expectedState = await instance.getForSale();

    expect(cowState.toNumber()).to.equal(expectedState.toNumber());
  });
