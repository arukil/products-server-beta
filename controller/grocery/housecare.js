const Housecare = require('../../model/grocery/housecare')

const housecare = async (req, res) => {

    await Housecare.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data })
    });
}

module.exports = housecare;

