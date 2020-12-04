pragma solidity >=0.6.0;

import './AccessControl.sol';

contract Base is AccessControl {
    //Fields
    struct Cow {
        bool isPaused;
        bool isMeat;
        uint price;
        uint weight;
        uint state;
        uint256 cowId;
        address farmer;
        address butcher;
        address[] consumers;
        address currentLocation;
    }
    enum State {Raised, ForSale, Sold, Transported, TransportConfirmed, Butchered, Eaten} 
    mapping(uint256 => Cow) public cows;
    uint256[] public cowIds;

    function pushCowId(uint256 _cowId) public {
        cowIds.push(_cowId);
    }

    function getTransoprted() public pure returns(uint) {
        uint res = uint(State.Transported);
        return res;
    }

    function getForSale() public pure returns(uint) {
        uint res = uint(State.ForSale);
        return res;
    }

    function setCowState (uint256 cowId, uint state) public {
        cows[cowId].state = state;
    }

    function getCowState (uint256 cowId) public view returns (uint) {
        return cows[cowId].state;
    }

    function getCowLocation (uint256 cowId) public view returns (address) {
        return cows[cowId].currentLocation;
    }

    function getCowFarmerAddress (uint256 cowId) public view returns (address) {
        return cows[cowId].farmer;
    }

    function getCowIsPaused (uint256 cowId) public view returns (bool) {
        return cows[cowId].isPaused;
    }

    //Modifiers
    //only farmer can call
    modifier onlyFarmer() {
        require(users[msg.sender] == Actor.Farmer);
        _;
    }
    //only butcher can call
    modifier onlyButcher() {
        require(users[msg.sender] == Actor.Butcher);
        _;
    }
    //only consumer can call
    modifier onlyConsumer() {
        require(users[msg.sender] == Actor.Consumer);
        _;
    }

    //Events:
    event Raised(uint256 cowId);
    event ForSale(uint256 cowId);
    event Sold(uint256 cowId);
    event Transported(uint256 cowId);
    event Butchered(uint256 cowId);
    event Eaten(string message);
}