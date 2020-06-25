const deposit = require('./operations/deposit')
const withdraw = require('./operations/withdraw')
const bankaccount = {
    balance: 50,
    balanceFormat(){
        return (this.balance).toFixed(2) + " €"
    },
    history:[],
}
deposit(bankaccount, 155.1234);
deposit(bankaccount, 100);
withdraw(bankaccount, 55.50)
exports.bankaccount = bankaccount;
console.log(bankaccount.history);