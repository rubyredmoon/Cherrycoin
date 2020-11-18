 patch/kangarang-factory-tests
const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 10000, 'Simon Bucks', 1, 'SBX');
};

const EIP20 = artifacts.require(`./EIP20.sol`)

module.exports = (deployer) => {
  deployer.deploy(EIP20)
}
 1.0.0
