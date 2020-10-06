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
            return res.json({ message: false });
        })

};

exports.phonenumberVerify = async (req, res) => {

    await client.verify.services(process.env.SERVICEID).verificationChecks.create({
        to: `+91${req.body.phonenumber}`,
        code: req.body.code
    })
        .then(async (data) => {
            if (data.valid) {
                const isUserExisting = await User.findOne({ phonenumber: req.body.phonenumber });
                if (isUserExisting) {
                    const token = await jwt.sign({ userId: isUserExisting }, process.env.JWTSECRET, { expiresIn: '180d' });
                    return res.json({ status: true, token: token });
                }
                else {
                    const user = await new User({
                        username: 'Guest',
                        phonenumber: req.body.phonenumber,
                    });
                    user.save()
                        .then(async () => {
                            const token = await jwt.sign({ userId: user }, process.env.JWTSECRET, { expiresIn: '180d' });
                            return res.json({ status: true, token: token });
                        })
                        .catch(() => {
                            return res.json({ status: false, message: 'something went wrong , try later.' });
                        });
                }
            }
            else {
                res.json({ status: false, message: "The SMS passcode you've entered is incorrect." })
            }
        })
        .catch((err) => {
            return res.json({ status: false, message: 'something went wrong , try later' });
        });

};



