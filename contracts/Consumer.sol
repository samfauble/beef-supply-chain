pragma solidity >=0.6.0;

import "./Base.sol";

contract Consumer is Base {
    //Fields
    address consumerAddress;


    //Methods:
    function buyMeat(uint256 cowId, uint weightPurchased) payable public returns(bool success) {
        return true;
    }
    function eatMeat(uint256 cowId) public {

    }
}