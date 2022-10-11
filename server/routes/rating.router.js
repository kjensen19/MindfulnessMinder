const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('reqs??? in rating post server', req.body, req.user.id)
    const queryText = `INSERT into "DailyAssesment"(users_id, area_one, area_two, area_three, area_four)
    values($1, $2, $3, $4, $5)
    `
    const queryVals = [req.user.id, req.body.physical, req.body.emotional, req.body.mental, req.body.psychosocial]
    pool.query(queryText, queryVals)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('ERROR in rating POST', err)
        res.sendStatus(500)
      })
});

module.exports = router;