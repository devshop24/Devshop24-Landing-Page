const helmet = require( 'helmet' );
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const router = require( 'express' ).Router();

router.use(
    helmet(),
    express.json()
)

module.exports = router;