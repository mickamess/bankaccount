const deposit = require('./operations/deposit')
const withdraw = require('./operations/withdraw')
class BankAccount {
    constructor(balance) {
        this.balance = balance;
        this.history = [];
    }
}
const MyBankAccount = new BankAccount(50)

// session de test
deposit(MyBankAccount, 155.1234);
deposit(MyBankAccount, 100);
withdraw(MyBankAccount, 55.50)
console.log(MyBankAccount.history);

exports.bankaccount = BankAccount;