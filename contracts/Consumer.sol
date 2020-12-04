pragma solidity >=0.6.0;

import "./Base.sol";

contract Consumer is Base {
    //Fields
    address _consumerAddress;
    struct Meat {
        uint256 weight;
    }

    mapping(uint256 => Meat) public cowsBoughtToWeight;

    //Methods:
    function buyMeat(address payable to, uint256 cowId, uint256 weightPurchased) payable public {
        //transfer wei
        uint256 fees = cows[cowId].price * weightPurchased;
        to.transfer(fees);
        
        //change meat
        uint256 newWeight = cows[cowId].weight - weightPurchased;
        cows[cowId].weight = newWeight;
        if(cows[cowId].weight == 0) {
            delete cows[cowId];
        }

        cowsBoughtToWeight[cowId].weight = weightPurchased;
    }

    function getCowMeat(uint256 cowId) public view returns (uint256) {
        return cowsBoughtToWeight[cowId].weight;
    }
}