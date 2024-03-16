module.exports.health = function health(req, res) {
    res.status(200).send('UP')
}