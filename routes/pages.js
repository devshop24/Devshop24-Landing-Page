const router = require( 'express' ).Router();

router.get('/', ( _, res ) => res.render( 'home', { form_id: process.env.FORM_CONNECT }));
router.get('/about', ( _, res ) => res.render( 'about' ));
router.get('/contact', ( _, res ) => res.render( 'contact' ));

router.get('/media', ( _, res ) => {
    const data = {
        title: "Media"
    }

    res.render( 'media', data )
});

module.exports = router;