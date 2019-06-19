const HDWalletProvider = require("truffle-hdwallet-provider");

require('dotenv').config();  // Store environment-specific variable from '.env' to process.env

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id,
      gas: 6721975
    },
    devGanache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    devGeth: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 6200000
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 3000000,
      gasPrice: 17
    }
  }
};
