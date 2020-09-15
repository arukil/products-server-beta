require('dotenv').config();

const User = require('../../model/user/signin')

const client = require('twilio')(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

const jwt = require('jsonwebtoken');


exports.phonenumberSignin = async (req, res) => {

    await client.verify.services(process.env.SERVICEID).verifications.create({
        to: `+91${req.body.phonenumber}`,
        channel: 'sms'
    })
        .then(() => {
            return res.json({ message: true });
        })
        .catch(err => {
            return res.json({ message: `Enter number is invalid ${process.env.SERVICEID}`, error: err });
        })

};


exports.phonenumberVerify = async (req, res) => {

    await client.verify.services(process.env.SERVICEID).verificationChecks.create({
        to: `+91${req.body.phonenumber}`,
        code: req.body.code
    })
        .then(async () => {

            const isUserExisting = await User.findOne({ phonenumber: req.body.phonenumber });
            if (isUserExisting) {
                const token = await jwt.sign({ userId: isUserExisting._id, }, process.env.JWTSECRET, { expiresIn: '180d' });
                return res.json({ verification: true, token: token, user: isUserExisting, expiresIn: 15552000 });
            }
            else {
                const user = await new User({
                    username: 'Guest',
                    phonenumber: req.body.phonenumber,
                });
                user.save().then(async () => {
                    const token = await jwt.sign({ userId: user._id, }, process.env.JWTSECRET, { expiresIn: '180d' });
                    return res.json({ verification: true, token: token, user: user, expiresIn: 15552000 });
                })
                    .catch(() => {
                        return res.json({ message: "something went wrong,try again later" });
                    });
            }
        })
        .catch((err) => {
            return res.status(404).json({ error: err, message: 'please enter valid otp' });
        });

};



