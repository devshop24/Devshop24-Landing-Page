const router = require( 'express' ).Router();
const pageRoutes = require( './pages' );
const subscriberRoutes = require( './subscribers' );

router.use( '/', pageRoutes );
router.use( '/api/subscribers', subscriberRoutes );

module.exports = router;