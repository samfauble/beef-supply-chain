pragma solidity >=0.6.0;

import "./Base.sol";

contract Core is Base {
    //Fields
    address _owner;

    constructor() public {
        _owner = msg.sender;
        setFarmer(_owner);
    }


    //Methods:
    function ownable() public returns (address) {
        _owner = msg.sender;
        return _owner;
    }
    function pause(uint256 cowId) public {
        if(cows[cowId].isPaused == true) {
            cows[cowId].isPaused = false;
        } else {
            cows[cowId].isPaused = true;
        }
    }

    function getOwner() public view returns (address) {
        return _owner;
    }
}