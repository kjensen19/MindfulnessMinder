const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {


  // GET route code here
  const queryText = `
    SELECT * FROM "Exercise"`

  pool.query(queryText)
  .then((dbRes) => {
    console.log('dbres in assesment GET', dbRes.rows)
    res.send(dbRes.rows)
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

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const idToUpdate = req.params.id
    const sqlText = `
    UPDATE "Exercise"
      SET
        "Type" = $1,
        "Duration" = $2
      WHERE
        id = $3`
    const sqlValues = [req.body.Type, req.body.Duration, idToUpdate]
    pool.query(sqlText, sqlValues)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('Error in PUT', error)
            res.sendStatus(500)
        })
})

router.delete('/:id', (req, res) => {
    const idToDelete = req.params.id
    console.log('id?', idToDelete)
})

module.exports = router;


// router.put('/:id', (req, res) => {
//     // Update this single student
//     console.log('PUT /students/:id')
//     console.log(req.body)
//     const idToUpdate = req.params.id;
//     const sqlText = `
//       UPDATE students
//       SET
//         github_name = $1, 
//         skill_level = $2
//       WHERE
//         id = $3
//     `;
//   const sqlValues = [req.body.githubName, req.body.skillLevel, idToUpdate]
//     pool.query(sqlText, sqlValues)
//         .then((result) => {
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500);
//         });
// });