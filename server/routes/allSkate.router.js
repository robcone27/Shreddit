

const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//Gets all items for selected user
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
    let queryText = 
    `SELECT * FROM "item"
    WHERE "user_id" = $1
    ORDER BY "id" DESC;`
        ;

    pool
        .query(queryText, [req.user.id])
        .then((response) => {
            res.send(response.rows); // response.rows contains all the items
        })
        .catch((error) => {
            console.log(`There was an error with the /api/userSkateSpot GET:`, error);
            res.sendStatus(500); // there was an error
        });
});

module.exports = router;