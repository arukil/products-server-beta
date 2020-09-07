const Packedfood = require('../model/packedfood')

const packedfood = async (req, res) => {

    await Packedfood.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data })
    });
}

module.exports = packedfood;

