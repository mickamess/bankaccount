module.exports = function withdraw(account, withdrawAmount) {
    if ( withdrawAmount <= 0) {
        return '! please enter a positive amount !'
    }
    if ( withdrawAmount>account.balance)
    {
        return `your current balance (${account.balance}) insuffisant for this withdrawal`
    }
const date = new Date();
const newBalance = account.balance - withdrawAmount;
const detailsOfWithdrawal = {
    previousBalance: `${account.balance}€`,
    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getSeconds()}`,
    amount: `withdrawal of ${withdrawAmount.toFixed(4)}€`,
    newBalance: `${newBalance.toFixed(4)}€`
}
account.balance -= withdrawAmount;
account.history.push(detailsOfWithdrawal);
}
