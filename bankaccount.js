const deposit = require('./operations/deposit')
const withdraw = require('./operations/withdraw')
const myBankAccount = {
        balance: 0,
        history: [],
    }


// session de test
deposit(myBankAccount, 155.1234);
deposit(myBankAccount, 100);
withdraw(myBankAccount, 55.50)
console.log(myBankAccount.history);

exports.bankaccount = myBankAccount;