router.get('/editPage/:id', (req, res) => {
    const queryText = 'SELECT * FROM movies WHERE id=$1;';
    pool.query(queryText, [req.params.id])
      .then(result => {
        res.send(result.rows[0]);
        // console.log('THIS IS RESULT.ROWS', result.rows[0])
      })
      .catch((error) => {
        console.log('Error completing SELECT movie query', error);
        res.sendStatus(500);
      })
  })

  module.exports = router;