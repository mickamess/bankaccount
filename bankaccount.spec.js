const bankaccount = require('./bankaccount')
const deposit = require('./operations/deposit');

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
