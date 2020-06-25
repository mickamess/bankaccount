module.exports = function withdraw(account, withdrawAmount) {
    if ( withdrawAmount <= 0) {
        return '! please enter a positive amount !'
    }
        if ( withdrawAmount>account.balance)
    {
        return `your current balance (${account.balance}) insuffisant for this withdrawal`
    }
account.balance -= withdrawAmount;
}
