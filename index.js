let username = document.getElementById("name");
let accountNumber = document.getElementById("accountNumber");
let balance = document.getElementById("balance");
let depositBtn = document.getElementById("deposit");
let withdrawBtn = document.getElementById("withdraw");
let checkBalanceBtn = document.getElementById("balancebtn");
let message = document.getElementById("message");
 
class Account{
    constructor(name, balance,  currency ) {
        this.name = name;
        this.balance = balance;
        this.currency = currency;
    }

    deposit(a){
        
        this.balance  += a
        message.innerText = `your new  balance is:  ${this.currency}${this.balance}`
        
    }

    withdraw(b) {
        this.balance -= b
        message.innerText = `you have withdrawn ${this.currency}${b}, your new balance is ${this.currency}${this.balance}`
    }

    checkBalance(){
        message.innerText = `your balance is: ${this.currency}${this.balance}`
    }
}

const EvelynAccount = new Account("Evelyn Mwanunura  ", 500, "USD");

function displayAccountInfo(){
    username.innerText = `Name: ${EvelynAccount.name}`;
    accountNumber.innerText = `Account Number: 123456789`;
    balance.innerText = `Balance: ${EvelynAccount.currency}${EvelynAccount.balance}`;
}
window.onload = displayAccountInfo();

depositBtn.addEventListener("click", function() {
    let a = parseFloat(prompt("Enter amount to deposit:"));
    EvelynAccount.deposit(a);
    displayAccountInfo();

});

withdrawBtn.addEventListener("click", function() {
    
    let b = parseFloat(prompt("Enter amount to withdraw:"));
    EvelynAccount.withdraw(b);
    displayAccountInfo();
});

checkBalanceBtn.addEventListener("click", function() {
    EvelynAccount.checkBalance();
    displayAccountInfo();
});