require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      // Если необходимо, можно указать приватные ключи или адреса аккаунтов:
      accounts: ["0xe626fed8b9e0c98d5c5e7dfdee8b568633a6258518034d01438414c2137f3668"]
    }
  }
};
