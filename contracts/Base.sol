pragma solidity >=0.6.0;

import './AccessControl.sol';

contract Base is AccessControl {
    //Fields
    struct Cow {
        bool isMeat;
        uint price;
        uint weight;
        State state;
        uint256 cowId;
        address farmer;
        address butcher;
        address[] consumers;
        address currentLocation;
    }
    enum State {Raised, ForSale, Sold, Transported, TransportConfirmed, Butchered, Eaten} 
    mapping(uint256 => Cow) cows;

    //Events:
    event Raised(uint256 cowId);
    event ForSale(uint256 cowId);
    event Sold(uint256 cowId);
    event Transported(uint256 cowId);
    event Butchered(uint256 cowId);
    event Eaten(string message);
}