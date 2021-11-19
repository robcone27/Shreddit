

const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
        let queryText = `SELECT * FROM "item"
        WHERE "user_id" = $1;`;
    
        //this is where i need to change querytext to show individual 
        //keep this code above to show all spots 
    
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