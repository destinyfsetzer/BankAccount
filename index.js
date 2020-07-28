"use strict"

const assert = require("assert")
const readline = require("linebyline")
const { start } = require("repl")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//other bank account stuff

let balance

class Account {
  balance = 0
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber
    this.owner = owner
    this.transactions = []
  }
  balance() {
    function sumTotal(total, num) {
      return total + num
    }
    balance = transactions.reduce(sumTotal)
  }
  deposit(amt) {
    if (amt > 0) {
      this.transactions.push(new Transaction(amt, null))
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

class Transaction {
  constructor(amount, payee) {
    this.date = new Date()
    this.amount = amount
    this.payee = payee
  }
}

// let person1 = new Account(000001, "Michael Scoggins")
// person1.deposit(50)
// console.log(person1)
// // person1.balance()

// console.log(person1)
// person1.charge("Michael Scoggins", 60)

const getPrompt = () => {
  printStacks()
  rl.question("start stack: ", (startStack) => {
    rl.question("end stack: ", (endStack) => {
      towersOfHanoi(startStack, endStack)
      getPrompt()
    })
  })
}
