const Grocery = require('../../model/grocery/grocery')

const grocery = async (req, res) => {

    await Grocery.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data })
    });
}

module.exports = grocery;

