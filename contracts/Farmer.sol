pragma solidity >=0.6.0;

import "./Base.sol";

contract Farmer is Base {
    //Fields
    address farmerAddress;
    uint8 zipCode;
    mapping(uint => Cow) farmerCows;


    //Methods:
    function raiseCow(uint256 cowId) public {

    }
    function putCowUpForSale(uint256 cowId) public {

    }
    function transportCow(uint256 cowId) public {

    }
}