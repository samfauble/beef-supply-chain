import React, {Fragment, useState, Children, cloneElement, isValidElement, useEffect} from "react";

export function CowUI (props) {
    let cowMethods = {};
    let [getId, setId] = useState();
    let [getLocation, setLocation] = useState();
    let [getPrice, setPrice] = useState();
    let [getWeight, setWeight] = useState();
    let [getState, setState] = useState();
    let [getIsMeat, setIsMeat] = useState();
    let [getFarmer, setFarmer] = useState();
    let [getButcher, setButcher] = useState();
    

    cowMethods = {
        setId,
        setLocation,
        setPrice,
        setWeight,
        setState,
        setIsMeat,
        setFarmer,
        setButcher,
        getId,
        getPrice,
        getWeight
    }

    let kids = Children.map(props.children, (child) => {
        return cloneElement(child, {cowMethods})
    });

    return (
        <Fragment >
            <h1>
                Cow
            </h1>
            <p>
                ID: {getId ? getId : "N/A"}
                <br/>
                Location: {getLocation ? getLocation : "N/A"}
                <br/>
                Price: {(getPrice) ? getPrice : 0}
                <br/>
                Weight: {getWeight ? getWeight : "N/A"}
                <br/>
                Current State: {getState ? getState : "N/A"}
                <br/>
                Butchered: {getIsMeat ? getIsMeat : "N/A"}
                <br/>
                Farmer: {getFarmer ? getFarmer : "N/A"}
                <br/>
                Butcher: {getButcher ? getButcher : "N/A"}
            </p>
            
            {kids}
        </Fragment >
    )
}