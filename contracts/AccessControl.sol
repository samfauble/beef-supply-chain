pragma solidity >=0.6.0;

contract AccessControl {

    enum Actor {Farmer, Butcher, Consumer}
    struct User {
        uint role;
    }
    mapping(address => User) users;

    function setFarmer(address farmerAddress) public {
        users[farmerAddress].role = uint(Actor.Farmer);
    }

    function setButcher(address butcherAddress) public {
        users[butcherAddress].role = uint(Actor.Butcher);
    }

    function setConsumer(address consumerAddress) public {
        users[consumerAddress].role = uint(Actor.Consumer);
    }

    function getUserType (address user) public view returns (uint) {
        return uint(users[user].role);
    }

    function getFarmer() public pure returns(uint) {
        return uint(Actor.Farmer);
    }
    function getButcher() public pure returns(uint) {
        return uint(Actor.Butcher);
    }
    function getConsumer() public pure returns(uint) {
        return uint(Actor.Consumer);
    }
}