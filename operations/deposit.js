module.exports = function deposit(account, depositAmount) {
    if ( depositAmount <= 0) {
        return '! deposit <= 0 !'
    }
      account.balance += depositAmount;
}
