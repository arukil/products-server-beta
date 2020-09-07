const Snack = require('../model/snack')

const snack = async (req, res) => {

    await Snack.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data })
    });
}

module.exports = snack;

