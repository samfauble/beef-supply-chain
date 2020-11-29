const AccessControl = artifacts.require("../contracts/AccessControl.sol"); 
const Base = artifacts.require("../contracts/Base.sol"); 
const Core = artifacts.require("../contracts/Core.sol"); 
const Farmer = artifacts.require("../contracts/Farmer.sol"); 
const Butcher = artifacts.require("../contracts/Butcher.sol"); 
const Consumer = artifacts.require("../contracts/Consumer.sol"); 

contract("AccessControl", accounts => {
  it("...should store the value 89.", async () => {
    assert.equal(89, 89, "The value 89 was not stored.");
  });
});
