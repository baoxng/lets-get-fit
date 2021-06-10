//Require for router
const router = require("express").Router();
const path = require("path");

//Get all html pages

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

//Landing page 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
