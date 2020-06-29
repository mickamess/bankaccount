const bankaccount = require('./bankaccount');
const deposit = require('./operations/deposit');
const withdraw = require('./operations/withdraw');
bankaccount.history = [];


it('expected true should return true', function(){
    expect(true).toBe(true)
});

it('should have a new balance of 100 after deposit of 100 previous balance 0 ', function(){
    bankaccount.balance = 0;
    deposit(bankaccount,100)
    expect(bankaccount.balance).toBe(100)
});

it('should have an exception if try deposit -100 ', function(){
    bankaccount.balance = 0;
    expect(deposit(bankaccount,-100)).toBe('! deposit <= 0 !')
});

it('should have a new balance of 100.1234 after deposit of 100.1234 previous balance 0 ', function(){
    bankaccount.balance = 0;
    deposit(bankaccount,100.1234);
    expect(bankaccount.balance).toBe(100.1234)
});

it('should have a new balance of 0 after withdraw of 100 with previous balance 100 ', function(){
    bankaccount.balance = 100;
    withdraw(bankaccount,100);
    expect(bankaccount.balance).toBe(0)
});

it('should have exception if withdraw negative amount ', function(){
    bankaccount.balance = 100;
    expect(withdraw(bankaccount,-100)).toBe('! please enter a positive amount !')
});

it('should have exception if withdraw with insuffisant current balance', function(){
    bankaccount.balance = 100;
    expect(withdraw(bankaccount,150)).toBe(`your current balance (${bankaccount.balance}) insuffisant for this withdrawal`)
});

it('we should see history of the operations after deposit 100 ', function(){
    deposit(bankaccount, 100);
    console.log(bankaccount.history);
    expect(bankaccount.history).toBe([
        {
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getSeconds()}`,
            amount: `deposit of ${depositAmount.toFixed(4)}€`
        }
    ]
)})
