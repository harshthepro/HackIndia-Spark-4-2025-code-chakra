const { ethers } = require("hardhat"); // Import ethers properly

async function main() {
  // Convert 0.001 ETH to Wei using ethers v6
  const lockedAmount = ethers.parseEther("0.001");

  // Get the contract factory
  const CrowdFunding = await ethers.getContractFactory("CrowdFunding");

  // Deploy the contract
  const crowdfunding = await CrowdFunding.deploy();

  // Wait for deployment to complete
  await crowdfunding.waitForDeployment();

  // Get contract address
  console.log(`CrowdFunding deployed to ${crowdfunding.target}`);
}

// Execute the deployment script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
