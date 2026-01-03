class Account{
    constructor(name, balance,  currency ) {
        this.name = name;
        this.balance = balance;
        this.currency = currency;
    }

    deposit(a){
        this.balance  += a
        return  `your new  balance is: ${this.balance}`
    }

    withdraw(b) {
        this.balance -= b
        return `you have withdrawn ${b}, your new balance is ${this.balance}`
    }

    checkBalance(){
        return `your balance is: ${this.balance}`
    }
}

const EvelynAccount = new Account("Evelyn Mwanunura  ", 500, "USD");

EvelynAccount.checkBalance;
EvelynAccount.deposit(300);
