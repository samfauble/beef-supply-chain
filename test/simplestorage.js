const AccessControl = artifacts.require("../contracts/AccessControl.sol"); 
const Base = artifacts.require("../contracts/Base.sol"); 
const Core = artifacts.require("../contracts/Core.sol"); 
const Farmer = artifacts.require("../contracts/Farmer.sol"); 
const Butcher = artifacts.require("../contracts/Butcher.sol"); 
const Consumer = artifacts.require("../contracts/Consumer.sol"); 
const { expect } = require('chai')

contract("AccessControl", accounts => {
  let owner = accounts[0];
  let user2 = accounts[1];
  it("...should set user to be a Farmer.", async () => {
    let instance = await AccessControl.deployed();
    instance.setFarmer(user2, {from: owner});
    expect(instance.farmers).to.include(user2);
  });

  it("...should set user to be a Butcher.", async () => {
    let instance = await AccessControl.deployed();
    instance.setButcher(user2, {from: owner});
    expect(instance.butchers).to.include(user2);
  });

  it("...should set user to be a Consumer.", async () => {
    let instance = await AccessControl.deployed();
    instance.setConsumer(user2, {from: owner});
    expect(instance.consumers).to.include(user2);
  });
});

contract("Core", accounts => {
  let owner = accounts[0];
  let account2 = accounts[1];
  it("...should update the contract Id.", async () => {
    let instance = await Core.deployed();
    instance.update(account2);
    expect(instance.owner).to.equal(account2, "not the correct contract Id");
  });

  it("...should change the contract owner.", async () => {
    let instance = await Core.deployed();
    instance.ownable(owner);
    expect(instance.owner).to.equal(owner, "not the correct owner");
  });
});

contract("Farmer", accounts => {
  let owner = accounts[0]
  it("...should create a new Cow.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 123;
    instance.raiseCow(newCowId);
    expect(instance.farmerCows).to.include(farmerCows[newCowId]);

  });
  it("...should put Cow up for sale.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 123;
    instance.raiseCow(newCowId);
    instance.putCowUpForSale(newCowId);
    expect(instance.cowsForSale).to.include(cowsForSale[newCowId]);
  });
  it("...should transfer Cow to butcher.", async () => {
    let instance = await Farmer.deployed();
    let newCowId = 123;
    instance.raiseCow(newCowId);
    cow.state = instance.State.Sold;
    instance.transportCow(cowId);
    expect(cow.currentLocation).to.not.equal(instance.farmerAddresss);
    expect(cow.state).to.equal(instance.State.Transported);
  });
});

contract("Butcher", accounts => {
  let owner = accounts[0];
  let farmer = await Farmer.deployed();
  let cowId = 1234;
  farmer.raiseCow(cowId);
  let cow = cow.state;
  it("...should become the new owner of the Cow, cow.state == Sold.", async () => {
    let instance = await Butcher.deployed();
    cow.state = instance.State.ForSale;

    instance.buyCow(cowId);

    expect(cow.state).to.equal(instance.State.Sold);
    expect(cow.butcher).to.exist();
  });

  it("...should confirm transfer of Cow and transfer funds.", async () => {
    let instance = await Butcher.deployed();
    cow.state = instance.State.Transported;
    cow.butcher = owner;
    let cowPrice = cows[cowId].price;
    let beforeFarmerAccount = farmer.farmerAccount.balance;
    let beforeButcherAccount = instance.butcherAccount.balance;

    instance.confirmTransport(cowId);

    let afterFarmerAccount = farmer.farmerAccount.balance;
    let afterButcherAccount = instance.butcherAccount.balance;

    expect(instance.butcherCows).to.include(cowId);
    expect(cow.state).to.equal(instance.State.TransportConfirmed);
    expect(afterFarmerAccount).to.equal(beforeFarmerAccount + cowPrice);
    expect(afterButcherAccount).to.equal(beforeButcherAccount - cowPrice);
  });

  it("...should change the Cow from animal to meat.", async () => {
    let instance = await Butcher.deployed();
    cow.butcher = owner;
    cow.state = State.TransportConfirmed;
    butcherCows[cowId] = cow;
    let beforeCowPrice = cow.price;
    let beforeCowWeight = cow.weight;

    instance.butcherCow(cowId);

    let afterCowPrice = cow.price;
    let afterCowWeight = cow.weight;

    expect(cow.state).to.equal(State.Butchered);
    expect(cow.isMeat).to.be.true();
    expect(afterCowPrice).to.be.greaterThan(beforeCowPrice);
    expect(afterCowWeight).to.be.lessThan(beforeCowWeight);
  });

  it("...should put the meat of the Cow up for sale.", async () => {
    let instance = await Butcher.deployed();
    cow.state = instance.State.Butchered;
    cow.isMeat = true;
    
    instance.sellMeat(cowId);

    expect(cow.state).to.equal(instance.State.ForSale);
    expect(instance.meatForSale).to.include(cowId);
  });
});

contract("Consumer", accounts => {
  let farmerAcc = accounts[0];
  let butcherAcc = accounts[1];
  let consumerAcc = accounts[2];
  let farmer = await Farmer.deployed();
  let butcher = await Butcher.deployed();
  let cowId = 1234;
  farmer.raiseCow(cowId);
  let cow = cows[cowId];
  cow.state = butcher.State.Butchered;
  cow.farmer = farmerAcc;
  cow.butcher = butcherAcc;
  cow.isMeat = true;
  it("...should transfer the ownership of the meat and transfer funds.", async () => {
    let instance = await Consumer.deployed();
    let weightPurchased = 200;
    let beforeCowWeight = cow.weight;
    
    instance.buyMeat(cowId, weightPurchased);
   
    let afterCowWeight = cow.weight;
    if(cow.weight == weightPurchased) {
      expect(cows[cowId]).to.not.exist();
    } else {
      expect(afterCowWeight).to.be.lessThan(beforeCowWeight);
    }
    expect(instance.cowsBoughtToWeight[cowId]).to.equal(weightPurchased);
  });

  it("...should send a thank-you message to the Farmer and Butcher", async () => {
    let instance = await Consumer.deployed();
    instance.consumerAddress = consumerAcc;
    let message = 'That was yummy, thanks!!';
    instance.thankProducers(message);

    expect(farmer.happyConsumers[consumerAcc]).to.exist();
    expect(butcher.happyConsumers[consumerAcc]).to.exist();
  });
});
