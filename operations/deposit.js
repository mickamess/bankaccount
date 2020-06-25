module.exports = function deposit(account, depositAmount) {
    if ( depositAmount <= 0) {
        return '! deposit <= 0 !'
    }
const date = new Date();
const newBalance = account.balance+depositAmount;
const detailsOfDeposit = {
    previousBalance: `${account.balance}€`,
    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getSeconds()}`,
    amount: `deposit of ${depositAmount.toFixed(4)}€`,
    newBalance: `${newBalance.toFixed(4)}€`
}
account.balance += depositAmount;
account.history.push(detailsOfDeposit);
}