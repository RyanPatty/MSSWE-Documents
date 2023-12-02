const router = require('express').Router();
let User = require('../models/user.js');
const bcrypt = require('bcryptjs');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const userType = req.body.userType;

    bcrypt.hash(password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        const newUser = new User({
            name,
            email,
            password: hashedPass,
            isAdmin: userType.toLowerCase() === "admin" ? true : false // added this line

        });

        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if(!user){
                return res.status(400).json({ msg: 'User not found' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    // Send user data back but remove the password
                    const userObj = { ...user._doc, password: undefined };
                    res.json(userObj);
                })
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.userType = req.body.userType;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
