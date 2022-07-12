const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorage, simpleStorageFactory;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("should start with a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("should update when we call store function", async () => {
    const expectedValue = "7";
    const txRes = await simpleStorage.store("7");
    await txRes.wait(1);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });
});
