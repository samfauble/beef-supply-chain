pragma solidity >=0.6.0;

import './AccessControl.sol';

contract Base is AccessControl {
    //Fields
    struct Cow {
        bool isMeat;
        uint256 cowId;
        address farmer;
        address butcher;
    }
    enum State {Raised, ForSale, Sold, Transported, Butchered, Eaten} 
    mapping(uint256 => Cow) cowsForSale;

    //Events:
    event Raised(uint256 cowId);
    event ForSale(uint256 cowId);
    event Sold(uint256 cowId);
    event Transported(uint256 cowId);
    event Butchered(uint256 cowId);
    event Eaten(string message);
}