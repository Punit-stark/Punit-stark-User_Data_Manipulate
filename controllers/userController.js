const User = require('../models/User');

exports.addUser = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = new User({ name });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addButton = async (req, res) => {
    try {
        const { name, button } = req.body;
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.buttons.push(button);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUser = async (req, res) => {
    try {
        const { name } = req.query;
        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
