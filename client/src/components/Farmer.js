import React, {Fragment, useState} from "react";

export function FarmerUI (props) {
    let [getNewCowId, setNewCowId] = useState({});
    let {web3, cowMethods, contract, accounts} = props;
    console.log(accounts)

    let makeFarmer = async (e) => {
        e.preventDefault();
        let myAddress = accounts[0];
        await contract.methods.setFarmer({myAddress});
    }

    let handleChange = (e) => {
        setNewCowId(e.target.value);
    }

    let cowForSale = async (e) => {
        e.preventDefault(); 
        await contract.methods.putCowUpForSale(getNewCowId, 0);
        cowMethods.setPrice(0);

        cowMethods.setState("For Sale");
    }

    let createCow = async (e) => {
        e.preventDefault();
        let farmer = accounts[0];
        await contract.methods.raiseCow(getNewCowId);
        cowMethods.setId(getNewCowId);
        cowMethods.setIsMeat(false);
        cowMethods.setFarmer(farmer);
        cowMethods.setLocation(farmer);
        cowMethods.setState("Raised");
        cowMethods.setWeight(getNewCowId);
    }

    let transport = async (e) => {
        e.preventDefault();
        await contract.methods.transportCow(getNewCowId);
        cowMethods.setState("Transported");
    }

    return (
        <Fragment >
            <h1>
                Farmer
            </h1>
            <button onClick={makeFarmer}>
                Click to make yourself a farmer
            </button>
            <br />
            <br />
            <form>
                <label name="newCow">Create new cow with ID number:  </label>
                <input type="number" name="newCow" value={getNewCowId} onChange={handleChange}/>
                <button name="submitCow" onClick={createCow}>
                    Create Cow
                </button>    
            </form>
    
            <br />
            <br />
            <button onClick={cowForSale}>
                Put cow up for sale
            </button>
            <br />
            <br />
            <button onClick={transport}>
                Click to transport cow to butcher only if butcher buys cow.
            </button>
        </Fragment >
    )
}