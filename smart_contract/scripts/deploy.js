const hre = require("hardhat");

const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy()

  console.log('Transaction deployed to: ', transactions.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
