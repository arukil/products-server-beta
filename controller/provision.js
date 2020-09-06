const Provision = require('../model/provision')

const provision = async (req, res) => {

    await Provision.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data })
    });
}

module.exports = provision;

