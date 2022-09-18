// require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// https://eth-goerli.g.alchemy.com/v2/qEzneBO0qRaGsM7SpeKZRKMYk5Wxi9a9

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/qEzneBO0qRaGsM7SpeKZRKMYk5Wxi9a9',
      accounts: ['bb5a9d67acd42f34a6d1a34d45cffb9c4b5d0fcf8d2298cd7325932fac14bc82']
    }
  }
};