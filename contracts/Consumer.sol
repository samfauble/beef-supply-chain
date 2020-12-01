pragma solidity >=0.6.0;

import "./Base.sol";

contract Consumer is Base {
    //Fields
    address consumerAddress;
    mapping(uint256 => uint) cowsBoughtToWeight;


    //Methods:
    function buyMeat(uint256 cowId, uint weightPurchased) payable public returns(bool success) {
        return false;
    }
    function thankProducers(string memory message) public returns (bool wasSent){
        return false;
    }
}