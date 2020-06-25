const deposit = require('./operations/deposit')
const withdraw = require('./operations/withdraw')

module.exports =  function (balance) { 

    this.balance = balance;
    this.history = [];
};



/* session de test
deposit(myBankAccount, 155.1234);
deposit(myBankAccount, 100);
withdraw(myBankAccount, 55.50)
console.log(myBankAccount.history);*/

