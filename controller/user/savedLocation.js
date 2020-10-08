const User = require('../../model/user/savedLocation');


exports.create = async (req, res) => {

    const user = await User.findOne({ userId: req.body.userId });
    //update
    if (user) {

        const user = await new User({
            userId: req.body.userId,
            address: user.address.push(req.body.address),
        });
        user.save()
            .then(async () => {
                return res.json({ status: true, message: 'successfully saved' });
            })
            .catch(() => {
                return res.json({ status: false, message: 'something went wrong , try later.' });
            });

    }
    //create
    else {
        const user = await new User({
            userId: req.body.userId,
            address: req.body.address,
        });
        user.save()
            .then(async () => {
                return res.json({ status: true, message: 'successfully saved' });
            })
            .catch(() => {
                return res.json({ status: false, message: 'something went wrong , try later.' });
            });
    }

}

//read

exports.read = async (req, res) => {
    await User.findOne({ userId: req.body.userId }, (err, data) => {
        if (err) {
            throw err
        }
        res.json({ data });
    });
}


//delete

exports.delete = async (req, res) => {

    User.deleteOne({ userId: req.body.userId },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data)
                res.json({ status: true });
            }
        });

}

