import React, {Fragment, useState, useEffect} from "react";

export function CowUI (props) {
    let [getId, setId] = useState();
    let [getLocation, setLocation] = useState();
    let [getPrice, setPrice] = useState();
    let [getWeight, setWeight] = useState();
    let [getState, setState] = useState();
    let {web3, contract} = props;

    useEffect(async () => {
        await contract.methods.setFarmer(123)
    });

    return (
        <Fragment >
            <h1>
                Cow
            </h1>
            <p>
                ID: {getId}
                <br/>
                Location: {getLocation}
                <br/>
                Price: {getPrice}
                <br/>
                Weight: {getWeight}
                <br/>
                Current State: {getState}
                <br/>
            </p>
            
        </Fragment >
    )
}