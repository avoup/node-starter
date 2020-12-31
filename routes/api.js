const router = require('express').Router();

const apiController = require('../controllers/api');
const passportConfig = require('../config/passport');
/**
 * API examples routes.
 */
router.get('/api', apiController.getApi);
router.get('/api/nyt', apiController.getNewYorkTimes);
router.get('/api/steam', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getSteam);
router.get('/api/stripe', apiController.getStripe);
router.post('/api/stripe', apiController.postStripe);
router.get('/api/scraping', apiController.getScraping);
router.get('/api/twilio', apiController.getTwilio);
router.post('/api/twilio', apiController.postTwilio);
router.get('/api/foursquare', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFoursquare);
router.get('/api/tumblr', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTumblr);
router.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
router.get('/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
router.get('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
router.post('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
router.get('/api/twitch', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitch);
router.get('/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
router.get('/api/paypal', apiController.getPayPal);
router.get('/api/paypal/success', apiController.getPayPalSuccess);
router.get('/api/paypal/cancel', apiController.getPayPalCancel);
router.get('/api/lob', apiController.getLob);
// router.get('/api/upload', lusca({ csrf: true }), apiController.getFileUpload);
// router.post('/api/upload', upload.single('myFile'), lusca({ csrf: true }), apiController.postFileUpload);
router.get('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getPinterest);
router.post('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postPinterest);
router.get('/api/here-maps', apiController.getHereMaps);
router.get('/api/google-maps', apiController.getGoogleMaps);
router.get('/api/google/drive', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGoogleDrive);
router.get('/api/chart', apiController.getChart);
router.get('/api/google/sheets', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGoogleSheets);

module.exports = router;