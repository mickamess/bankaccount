const bankaccount = require('./bankaccount');
const deposit = require('./operations/deposit');
const withdraw = require('./operations/withdraw');
const testAccount = new bankaccount(0);


it('expected true should return true', function(){
    expect(true).toBe(true)
});

it('should have a new balance of 100 after deposit of 100 previous balance 0 ', function(){
    deposit(testAccount,100)
    expect(testAccount.balance).toBe(100)
});

it('should have an exception if try deposit -100 ', function(){
    testAccount.balance = 0;
    expect(deposit(testAccount,-100)).toBe('! deposit <= 0 !')
});

it('should have a new balance of 100.1234 after deposit of 100.1234 previous balance 0 ', function(){
    testAccount.balance = 0;
    deposit(testAccount,100.1234);
    expect(testAccount.balance).toBe(100.1234)
});

it('should have a new balance of 0 after withdraw of 100 with previous balance 100 ', function(){
    testAccount.balance = 100;
    withdraw(testAccount,100);
    expect(testAccount.balance).toBe(0)
});

it('should have exception if withdraw negative amount ', function(){
    testAccount.balance = 100;
    expect(withdraw(testAccount,-100)).toBe('! please enter a positive amount !')
});

it('should have exception if withdraw with insuffisant current balance', function(){
    testAccount.balance = 100;
    expect(withdraw(testAccount,150)).toBe(`your current balance (${testAccount.balance}) insuffisant for this withdrawal`)
});

it('we should see history of the operations after deposit 100 ', function(){
    testAccount.balance = 100;
    deposit(testAccount, 100);
    expect(testAccount.history).toBe([
        {
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getSeconds()}`,
            amount: `deposit of ${depositAmount.toFixed(4)}€`
        }
    ]
)})
