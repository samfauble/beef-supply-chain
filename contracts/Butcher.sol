pragma solidity >=0.6.0;

import "./Base.sol";

contract Butcher is Base {
    //Fields
    address _butcherAddress;
    uint8 _zipCode;

    mapping (uint256 => Cow) butcherCows;
    mapping (uint256 => Cow) meatForSale;
    mapping(address => string) happyConsumers;


    //Methods:
    function buyCow(uint256 cowId) public {
        cows[cowId].butcher = msg.sender;
    }
    function confirmTransport(uint256) onlyButcher public payable returns (bool success) {
        return true;
    }
    function butcherCow(uint256 cowId) onlyButcher public {

    }
    function sellMeat(uint256 cowId) onlyButcher public {

    }
}