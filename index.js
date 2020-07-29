const assert = require("assert")
// const readline = require("linebyline")
// const { start } = require("repl")
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// other bank account stuff

let balance

class Transaction {
  constructor(amount, payee) {
    this.date = new Date()
    this.amount = amount
    this.payee = payee
  }
}

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
  }

  balance() {
    function sumTotal(total, num) {
      return total + num
    }
    return (this.balance = transactions.reduce(sumTotal))
  }

  deposit(amt, payee) {
    if (amt > 0) {
      this.transactions.push(new Transaction(amt, payee))
      balance = amt
    } else {
      return "Input a positive integer, please. Do not make me ask again..."
    }
  }

  charge(payee, amt) {
    // balance = amt
    if (balance - amt > 0) {
      this.transactions.push(new Transaction(amt, payee))
    } else if (balance - amt < 0) {
      console.log("Ya broke, dude...")
    }
  }
}

// const getPrompt = () => {
//   BankAccount()
//   rl.question("account number: ", (startStack) => {
//     rl.question("owner: ", (endStack) => {
//       towersOfHanoi(startStack, endStack)
//       getPrompt()
//     })
//   })
// }

// 1. Should create Bank account: account number, name, transactions
// 2. Should create Transaction: is date defined, payee, amount
// 3. Should deposit correctly
// 4. Should deduct/charge correctly
// 5. Should return correct balance
// 6. Should prevent overdraft
// 7. Should not allow negative deposit
// 8. Should track multiple deposits and return accurate balance
// 9. Also, 8. should track multiple charges and return accurate balance

if (typeof describe === "function") {
  describe("BankAccount", () => {
    it("Should create Bank account: account number, name, transactions", function () {
      const bankAccount1 = new BankAccount("900-300-200", "Bob Dylan")
      assert.equal(bankAccount1.accountNumber, "900-300-200")
      assert.equal(bankAccount1.owner, "Bob Dylan")
      assert.equal(bankAccount1.transactions.length, 0)
    })
    it("should deposit correctly", function () {
      const arielsBank = new BankAccount("900-300-200", "Ariel")
      arielsBank.deposit(1, "Flounder")
      assert.equal(arielsBank.transactions[0].amount, 1)
      assert.equal(arielsBank.transactions[0].payee, "Flounder")
      arielsBank.deposit(10, "Sebastian")
      assert.equal(arielsBank.transactions[1].amount, 10)
      assert.equal(arielsBank.transactions[1].payee, "Sebastian")
    })
  })

  describe("Transaction", function () {
    it("Should have date, payee, amount", function () {
      const transaction1 = new Transaction(50, "Dob Bylan")
      assert.equal(transaction1.amount, 50)
      assert.equal(transaction1.payee, "Dob Bylan")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
  })

  // Should deposit correctly
  // deposit(amt, payee) - This method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
  // create a Bank Account and call it's deposit method// take in amount and payee
  // should invoke transaction and transfer an amount and payee and push() new transaction into the transaction array
}
