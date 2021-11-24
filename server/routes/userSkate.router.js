const express = require('express');
const { resetWarningCache } = require('prop-types');
const { useReducer } = require('react');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


//Gets all items from DB
router.get('/', rejectUnauthenticated, (req, res) => {
console.log(req.user);
    let queryText = `SELECT * FROM "item";`;

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
});

//Deletes skate spot from DB
router.delete('/:id', (req, res) => {

    console.log('comparing to item user id', req.params.id)
    let id = req.params.id //This our way of identifying the variable 'id' sent along with the route.
    let queryText = `
    DELETE FROM "item"
    WHERE id = $1;`;

    let values = [id]
    pool.query(queryText, values)
        .then(results => {
            res.sendStatus(201)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});

module.exports = router;