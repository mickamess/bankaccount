const deposit = require('./operations/deposit')
const bankaccount = {
    balance: 50,
    balanceFormat(){
        return (this.balance).toFixed(2)
    }
};
deposit(bankaccount, (155.1234));
console.log(bankaccount.balance);
exports.bankaccount = bankaccount;