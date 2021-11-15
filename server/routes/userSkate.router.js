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
      console.log(`There was an error with the /api/shelf GET:`, error);
      res.sendStatus(500); // there was an error
    });
});

module.exports = router;