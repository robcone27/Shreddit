

const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//PUT**************
//sql to update like 




router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
        let queryText = `SELECT * FROM "item" JOIN "user" ON "item"."user_id" = "user"."id";`;

        // `SELECT * FROM "item"
        // WHERE "user_id" = $1;`;
    
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