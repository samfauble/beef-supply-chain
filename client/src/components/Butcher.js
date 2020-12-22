import React, {Fragment} from "react";

export function ButcherUI (props) {
    let {web3, cowMethods, contract, accounts} = props;

    let makeButcher = async (e) => {
        e.preventDefault();
        let myAddress = accounts[0];
        await contract.methods.setButcher({myAddress});
    }

    let buy = async (e) => {
        e.preventDefault();
        let cowId = cowMethods.getId;
        await contract.methods.buyCow(cowId);
        
        cowMethods.setState("Sold");
        cowMethods.setButcher(accounts[0]);
    }

    let confirmTransport = async (e) => {
        e.preventDefault();
        let cowId = cowMethods.getId;
        await contract.methods.confirmTransport(cowId);

        cowMethods.setState("Transport Confirmed");
    }

    let butcher = async (e) => {
        e.preventDefault();
        let cowId = cowMethods.getId;
        let price = cowMethods.getPrice;
        let weight = cowMethods.getWeight;
        await contract.methods.butcherCow(cowId);

        cowMethods.setState("Butchered");
        cowMethods.setIsMeat(true);
        cowMethods.setPrice(price * 2);
        cowMethods.setWeight(weight / 2);
    }

    let sell = async (e) => {
        e.preventDefault();
        let cowId = cowMethods.getId;
        await contract.methods.sellMeat(cowId);

        cowMethods.setState("For Sale");
    }

    return (
        <Fragment >
            <h1>
                Butcher
            </h1>
            <button onClick={makeButcher}>
                Click to make yourself a butcher
            </button>
            <br />
            <button onClick={buy}>
                Click to buy cow
            </button>
            <br />
            <button onClick={confirmTransport}>
                Click to confirm the cow transported to you
            </button>
            <br />
            <br />
            <button onClick={butcher}>
                Click to butcher the cow
            </button>
            <br />
            <br />
            <button onClick={sell}>
                Click to sell the cow meat
            </button>
        </Fragment >
    )
}