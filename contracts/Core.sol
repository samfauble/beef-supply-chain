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
    function ownable(address newOwner) public returns (address) {
        _owner = newOwner;
        return _owner;
    }
    function pause(uint256 cowId) public {

    }
}