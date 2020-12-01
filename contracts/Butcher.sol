pragma solidity >=0.6.0;

import "./Base.sol";

contract Butcher is Base {
    //Fields
    address butcherAddress;
    uint8 zipCode;
    mapping (uint256 => Cow) butcherCows;
    mapping (uint256 => Cow) meatForSale;
    mapping(address => string) happyConsumers;


    //Methods:
    function buyCow(uint256 cowId) public {

    }
    function confirmTransport(uint256) public payable returns (bool success) {
        return true;
    }
    function butcherCow(uint256 cowId) public {

    }
    function sellMeat(uint256 cowId) public {

    }
}