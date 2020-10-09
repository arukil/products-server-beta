const User = require('../../model/user/savedLocation');

exports.create = async (req, res) => {

    User.findOneAndUpdate(
        { userId: req.body.userId },
        { $push: { address: req.body.address } },
        async function (error, success) {
            if (error) {
                return res.json({ data: false, message: '1' });
            }
            else if (success) {
                return res.json({ data: true, message: 'successfully saved' });
            }
            else {
                const user = await new User({
                    userId: req.body.userId,
                    address: req.body.address,
                });
                user.save()
                    .then(async () => {
                        return res.json({ data: true, message: 'successfully saved' });
                    })
                    .catch(() => {
                        return res.json({ data: false, message: error });
                    });
            }

        }
    )
}
//read
exports.read = async (req, res) => {
    await User.findOne({ userId: req.body.userId }, (err, data) => {
        if (err) {
            res.json({ data:err })
        }
        res.json({ data , message:'successfully read'  });
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
                res.json({ data: true });
            }
        });
}

