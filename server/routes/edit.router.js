const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');



router.get('/:id', (req, res) => {
    const queryText = 'SELECT * FROM item WHERE id=$1;';
    pool.query(queryText, [req.params.id])
      .then(result => {
        res.send(result.rows[0]);
        console.log('THIS IS RESULT.ROWS', result.rows[0])
      })
      .catch((error) => {
        console.log('Error completing SELECT item query', error);
        res.sendStatus(500);
      })
  })

  module.exports = router;