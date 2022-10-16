const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('date = ', new Date().getTime())
  const todayDate = new Date().toISOString();
  // GET route code here
  const queryText = `
    SELECT * from "DailyAssesment"
      WHERE "users_id"=$1
      AND "date"=cast($2 as date);
  `
  const queryVals = [req.user.id, todayDate]
  pool.query(queryText, queryVals)
    .then((dbRes) => {
      if(dbRes.rows.length !== 0){
        console.log('res.rows', dbRes.rows)
      res.send(dbRes.rows)
      }
      else{
        res.send(false)
      }
    })
    .catch((err) => {
      console.log('Error in rating GET', err)
      res.sendStatus(500)
    })
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