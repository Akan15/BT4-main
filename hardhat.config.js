require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      // Если необходимо, можно указать приватные ключи или адреса аккаунтов:
      accounts: ["0x744fde8ed1b15b36d1c770e10ed0d5dc14a64d4ce901ded352fbef4791722902"]
    }
  }
};
