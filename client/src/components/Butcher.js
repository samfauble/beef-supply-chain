import React, {Fragment} from "react";

export function ButcherUI (props) {
    let {web3} = props;

    return (
        <Fragment >
            <h1>
                Butcher
            </h1>
            <button>
                Click to make yourself a butcher
            </button>
            <br />
            <br />
            <button>
                Click to confirm the cow transported to you
            </button>
            <br />
            <br />
            <button>
                Click to butcher the cow
            </button>
            <br />
            <br />
            <button>
                Click to sell the cow meat
            </button>
        </Fragment >
    )
}