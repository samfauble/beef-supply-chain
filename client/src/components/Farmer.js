import React, {Fragment} from "react";

export function FarmerUI (props) {
    let {web3} = props;

    return (
        <Fragment >
            <h1>
                Farmer
            </h1>
            <button>
                Click to make yourself a farmer
            </button>
            <br />
            <br />
            <label name="newCow">Create new cow with ID number:  </label>
            <input type="number" name="newCow" />
            <br />
            <br />
            <button>
                Put cow up for sale
            </button>
            <br />
            <br />
            <button>
                Click to transport cow to butcher only if butcher buys cow.
            </button>
        </Fragment >
    )
}