//  Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
class BankAccount {
  constructor(mybalance, owner) {
    this.mybalance = mybalance;
    this.owner = owner;
  }
  deposit(amount1) {
    this.mybalance += amount1;
  };
  withdraw(amount) {
    if (amount > this.mybalance) {
      console.log("low balance");
    } else {
      this.mybalance -= amount;
    }
  };
  
 displayBalance(){
    console.log(
      `Your account has money:${this.mybalance} and Account holder name is ${this.owner}`
    );
  };
}
const bank = new BankAccount(300000, "Tom");
bank.deposit(3000);
bank.withdraw(5000);
bank.displayBalance();
