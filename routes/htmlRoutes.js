//Require for router
const router = require("express").Router();


//Get all html pages

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
});

//Landing page 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ''));
});

module.exports = router;
