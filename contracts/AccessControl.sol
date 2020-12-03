pragma solidity >=0.6.0;

contract AccessControl {

    enum Actor {Farmer, Butcher, Consumer}
    mapping(address => Actor) users;

    function setFarmer(address farmerAddress) public {
        users[farmerAddress] = Actor.Farmer;
    }

    function setButcher(address butcherAddress) public {
        users[butcherAddress] = Actor.Butcher;
    }

    function setConsumer(address consumerAddress) public {
        users[consumerAddress] = Actor.Consumer;
    }
}