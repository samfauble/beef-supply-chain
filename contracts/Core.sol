pragma solidity >=0.6.0;

import "./Base.sol";

contract Core is Base {
    //Fields
    address contractAddress;
    address owner;


    //Methods:
    function upgrade(address newAddress) public returns (bool success) {
        return true;
    }
    function ownable(address newOwner) public returns (address) {
        return owner;
    }
    function pause(uint256 cowId) public {

    }
}