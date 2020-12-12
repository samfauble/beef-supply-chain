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
    function buyMeat(uint256 cowId, uint256 weightPurchased) onlyConsumer enoughConsumerFunds(cowId, weightPurchased) payable public {
        require(cows[cowId].state == uint(State.ForSale) && cows[cowId].isMeat == true);
        
        //transfer wei
        uint256 fees = cows[cowId].price * weightPurchased;
        cows[cowId].butcher.transfer(fees);
        
        //change meat
        uint256 newWeight = cows[cowId].weight - weightPurchased;
        cows[cowId].weight = newWeight;
        if(cows[cowId].weight == 0) {
            delete cows[cowId];
        }

        cowsBoughtToWeight[cowId].weight = weightPurchased;
    }

    function getCowMeat(uint256 cowId) onlyConsumer public view returns (uint256) {
        return cowsBoughtToWeight[cowId].weight;
    }
}