import React, {Fragment} from "react";

export function ConsumerUI (props) {
    let {web3, cowMethods, contract, accounts} = props;

    let makeConsumer = async (e) => {
        e.preventDefault();
        let myAddress = accounts[0];
        await contract.methods.setConsumer({myAddress});
    }

    let buy = async (e) => {
        e.preventDefault();
        let id = cowMethods.getId;
        await contract.methods.buyMeat(id, 0);
    }

    return (
        <Fragment >
            <h1>
                Consumer
            </h1>
            <button onClick={makeConsumer}>
                Click to make yourself a consumer
            </button>
            <br />
            <br />
            <button onClick= {buy}>
                Click to buy meat
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </Fragment >
    )
}