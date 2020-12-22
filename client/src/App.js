import React, { Component } from "react";
import Core from "./contracts/Core.json";
import Base from "./contracts/Base.json";
import Farmer from "./contracts/Farmer.json";
import Butcher from "./contracts/Butcher.json";
import Consumer from "./contracts/Consumer.json";
import getWeb3 from "./getWeb3";
import {FarmerUI} from "./components/Farmer";
import {ButcherUI} from "./components/Butcher";
import {ConsumerUI} from "./components/Consumer";
import {CowUI} from "./components/Cow";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contracts: {} };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instances.
      const networkId = await web3.eth.net.getId();
      
      const baseNetwork = Base.networks[networkId];
      const base = new web3.eth.Contract(
        Base.abi,
        baseNetwork && baseNetwork.address,
      );

      const farmerNetwork = Farmer.networks[networkId];
      const farmer = new web3.eth.Contract(
        Farmer.abi,
        farmerNetwork && farmerNetwork.address,
      );

      const butcherNetwork = Butcher.networks[networkId];
      const butcher = new web3.eth.Contract(
        Butcher.abi,
        butcherNetwork && butcherNetwork.address,
      );

      const consumerNetwork = Consumer.networks[networkId];
      const consumer = new web3.eth.Contract(
        Consumer.abi,
        consumerNetwork && consumerNetwork.address,
      );

      const coreNetwork = Core.networks[networkId];
      const core = new web3.eth.Contract(
        Core.abi,
        coreNetwork && coreNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contracts: {core, base, farmer, butcher, consumer} }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    //await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();

    // Update state with the result.
    //this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    console.log(this.state.contracts)
    return (
      <div className="App">
        <CowUI web3= {this.state.web3} contract={this.state.contracts.base} accounts={this.state.accounts}>
          <FarmerUI web3= {this.state.web3} contract={this.state.contracts.farmer} accounts={this.state.accounts} />
          <ButcherUI web3= {this.state.web3} contract={this.state.contracts.butcher} accounts={this.state.accounts} />
          <ConsumerUI web3= {this.state.web3} contract={this.state.contracts.consumer} accounts={this.state.accounts} />
        </CowUI>
      </div>
    );
  }
}

export default App;
