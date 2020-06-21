module.exports = function withdraw(account, withdrawAmount) {
    if ( withdrawAmount <= 0) {
        return '! please enter a positive amount !'
    }
account.balance -= withdrawAmount;
}
