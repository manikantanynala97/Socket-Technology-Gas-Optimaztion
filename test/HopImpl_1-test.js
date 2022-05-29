const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Registry = await ethers.getContractFactory("HopImpl_1");
    const registry = await Registry.deploy("0xF9d5230B1AA44Dba47a96682D0CdC8Be5d38f34f");
    await registry.deployed();

  });
});