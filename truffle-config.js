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

//a contract address: 0xf1049e9fd4c9dcc9e5a5abb65696a5ec3fd90d0a
//Farmer Contract address: 0x64fc8aa8390d5b39519bf4a884aeefc19930e573
//Butcher Contract address: 0xe606427ac5987ab8003bdaedca215ec88ad1aab5
//Consumer Contract address: 0xa32b552d1d4f52d9da4c8432451f2c13e135683f
//Base Contract address: 0x2170a66c6f963ab7cd8515fb94188d9c2389b138
//Core Contract address: 0x5a96598a4a8fc07a70ded55fcc88ac9080870976
//AccessControl Contract address: 0x664b4228e1f4987a42fdf4d228356f14bfa5bd91