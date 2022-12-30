async function main() {
//Here we'll write code to put the smart contract on the blockchain.
//1. Fetch contract to deploy.
  const Token = await ethers.getContractFactory("Token");
  //ethers is the library which lets us interact with the blockchain inside javascript.


//2. Deploy contract.
  const token = await Token.deploy();

  await token.deployed();

  console.log("Token deployed to:", token.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });