const express = require("express");
const {
  createTransaction,
  getTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transactionController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all transaction routes
router.use(requireAuth);

// GET all transactions
router.get("/", getTransactions);

// GET single transaction
router.get("/:id", getTransaction);

// POST a new transaction
router.post("/", createTransaction);

// DELETE a transaction
router.delete("/:id", deleteTransaction);

// UPFATE a transaction
router.patch("/:id", updateTransaction);

module.exports = router;
