const PersonalCare = require('../../model/grocery/personalcare')

const personalcare = async (req, res) => {

    await PersonalCare.find({}, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data })
    });
}

module.exports = personalcare;

