const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
// this is actually /api/shelf
router.get('/', rejectUnauthenticated, (req, res) => {

  let queryText = `SELECT * FROM "item";`;

  //this is where i need to change querytext to show individual 
  //keep this code above to show all spots 

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows); // response.rows contains all the items
    })
    .catch((error) => {
      console.log(`There was an error with the /api/userSkateSpot GET:`, error);
      res.sendStatus(500); // there was an error
    });
});

// Adds item to the users and public feed 
router.post('/', (req, res) => {
    console.log('Req.body', req.body);
  
    const queryText = `
    INSERT INTO item ("comments", "image_url", "address", "user_id")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, [req.body.comments, req.body.image_url, req.body.address, req.user.id])
      .then(result => {
        console.log('results', result.rows);
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('error in query', error);
        res.sendStatus(500);
      })
    // endpoint functionality
  });

module.exports = router;