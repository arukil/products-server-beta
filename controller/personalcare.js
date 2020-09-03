const PersonalCare = require('../model/personalcare')

const personalcare = async (req, res) => {

    await PersonalCare.findOne({ name: 'soap' }, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data:data.list })
    });
}

module.exports = personalcare;

