const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
let seed = "lorem ipsum";

let provider = () =>  new HDWalletProvider(seed, "https://rinkeby.infura.io/v3/INFURA_ID", 0);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider,
       network_id: "4",
       gas: 10000000,
       gasPrice: 4500000,
       skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '^0.6.0'
    }
  }
};

//Farmer 
//Contract address: 0x664b4228e1f4987a42fdf4d228356f14bfa5bd91
//Tx hash: 0x2d70e4ae3c5dff575de5d51f64655b92a71c0597540a84e7551d7496e54918f0 

//Butcher 
//Contract address: 0x11ea9fc6b7fb93641c0d1828fe31897ea78f5644
//Tx hash: 0xfab5ce2430d487f733b8fb4699559184fc66ecfa59a3e61b312d3b1969627f1e 

//Consumer 
//Contract address: 0x5a96598a4a8fc07a70ded55fcc88ac9080870976
//Tx hash: 0xd8580b4915e58d6dc27d5389faddef02c9eabea0109381aae38ef06a98d9a9b5 

//Base 
//Contract address: 0xa32b552d1d4f52d9da4c8432451f2c13e135683f
//Tx hash: 0xd2d649b768bbe551d57d788b4935bd3cca0d6d70c0f32363038680270a8ccafb 


//Core 
//Contract address: 0x2170a66c6f963ab7cd8515fb94188d9c2389b138
//Tx hash: 0xcc56ea1e031b3b2ed24610f6d5216b3bd20dd2b723ecc861fb55884cdfcc0426 

//AccessControl 
//Contract address: 0x64fc8aa8390d5b39519bf4a884aeefc19930e573
//Tx hash: 0x854fe19daf975f791dad21016c2bf075d21b3ede5c2e8af413fbada8383ecec1