// import modules
const assert = require("assert")

// import classes
const { Transaction, BankAccount } = require("../index.js")

// declare and define variables

// TESTS
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
  describe("BankAccount", function () {
    it("should create Bank account: account number, name, transaction", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.owner, "Bob Dylan")
      assert.equal(bankAccount1.accountNumber, "xx2345")
      assert.equal(bankAccount1.transactions.length, 0)
      assert.equal(bankAccount1.balance(), 0)
    })
    it("Should return correct balance", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.charge("Starbucks", 10)
      assert.equal(bankAccount1.balance(), 90)
    })
    it("Should not allow negative deposit", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.deposit(100)
      assert.equal(bankAccount1.balance(), 100)
      bankAccount1.deposit(-30)
      assert.equal(bankAccount1.balance(), 100)
    })
    it("Should prevent overdraft", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge("Wayfair", 45)
      assert.equal(bankAccount1.balance(), 0)
    })
    it("Should allow a refund", function () {
      const bankAccount1 = new BankAccount("xx2345", "Bob Dylan")
      assert.equal(bankAccount1.balance(), 0)
      bankAccount1.charge("Home Depot", -65)
      assert.equal(bankAccount1.balance(), 65)
    })
  })
  describe("Transaction", function () {
    it("Should create a transaction correctly for deposit", function () {
      const transaction1 = new Transaction(50, "Dob Bylan")
      assert.equal(transaction1.amount, 50)
      assert.equal(transaction1.payee, "Dob Bylan")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
    it("Should create a transaction correctly for a charge", function () {
      const transaction1 = new Transaction(-50, "Dob Bylan")
      assert.equal(transaction1.amount, -50)
      assert.equal(transaction1.payee, "Dob Bylan")
      assert.notEqual(transaction1.date, undefined)
      assert.notEqual(transaction1.date, null)
    })
  })
  describe("Multiple Transactions", function () {
    const bankAccount2 = new BankAccount("900-222-111", "Rupert")
    it("should create new account correctly", function () {
      assert.equal(bankAccount2.owner, "Rupert")
      assert.equal(bankAccount2.accountNumber, "900-222-111")
      assert.equal(bankAccount2.balance(), 0)
    })
    it("should allow you to deposit multiple times and clear account", function () {
      bankAccount2.deposit(30)
      bankAccount2.deposit(20)
      bankAccount2.deposit(-3)
      bankAccount2.deposit(34.25)
      bankAccount2.deposit(10000.45)
      assert.equal(10084.7, bankAccount2.balance())
      bankAccount2.charge("Clear", 10084.7)
      assert.equal(0, bankAccount2.balance())
    })
    it("should balance account with multiple charges and count transactions", function () {
      bankAccount2.deposit(10000)
      bankAccount2.charge("target", 40)
      bankAccount2.charge("pizza hut", 10.32)
      bankAccount2.charge("HEB", 40)
      bankAccount2.charge("Academy", -20)
      assert.equal(9929.68, bankAccount2.balance())
      assert.equal(10, bankAccount2.transactions.length)
    })
  })
}
