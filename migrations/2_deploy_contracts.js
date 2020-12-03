var AccessControl = artifacts.require("./AccessControl.sol");
var Base = artifacts.require("./Base.sol");
var Core = artifacts.require("./Core.sol");
var Farmer = artifacts.require("./Farmer.sol");
var Butcher = artifacts.require("./Butcher.sol");
var Consumer = artifacts.require("./Consumer.sol");

module.exports = function(deployer) {
  deployer.deploy(AccessControl);
  deployer.deploy(Base);
  deployer.deploy(Core, {from: "0x145bbb9d9925347e98c7c3c8bf8d673c157e4e3b"});
  deployer.deploy(Farmer);
  deployer.deploy(Butcher);
  deployer.deploy(Consumer);
};
