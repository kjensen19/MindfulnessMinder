const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `
  SELECT * FROM "Exercise"
  `
  pool.query(queryText)
  .then((dbRes) => {
    res.send(dbRes)
  }).catch((dbErr) => {
    console.log('Error in exercise GET', dbErr)
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;