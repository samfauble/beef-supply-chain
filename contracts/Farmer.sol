pragma solidity >=0.6.0;

import "./Base.sol";

contract Farmer is Base {
    //Fields
    address farmerAddress;
    uint8 zipCode;
    mapping(uint256 => Cow) farmerCows;
    mapping(address => string) happyConsumers;

    //Methods:
    function raiseCow(uint256 _cowId) onlyFarmer public {
        cows[_cowId].isMeat = false;
        cows[_cowId].isPaused = false;
        cows[_cowId].state = uint(State.Raised);
        cows[_cowId].cowId = _cowId;
        cows[_cowId].weight = _cowId;
        cows[_cowId].farmer = msg.sender;
        cows[_cowId].currentLocation = msg.sender;
        farmerCows[cows[_cowId].cowId] = cows[_cowId];
        pushCowId(_cowId);
    }
    
    function putCowUpForSale(uint256 cowId, uint256 price) onlyFarmer public {
        cows[cowId].state = uint(State.ForSale);
        cows[cowId].price = price;
    }
    function transportCow(uint256 cowId) public {
        cows[cowId].state = uint(State.Transported);
        cows[cowId].currentLocation = cows[cowId].butcher;
    }
}