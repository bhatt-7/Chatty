// const User = require("../models/userModel");
// const expressAsyncHandler = require("express-async-handler");
// const { options } = require("../routes/userRoutes");
// const generateToken = require("../config/generateToken");

// const loginController = async (req, res) => {
//     const { name, password } = req.body;
//     const user = await User.findOne({ name });

//     if (user && (await user.matchPassword(password))) {
//         res.json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id),
//         });
//     } else {
//         res.status(401).json({ message: "Invalid Username and password" });
//     }
// };

// const registerController = async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         res.status(400).json({ message: "All necessary input fields are required to be filled!" });
//         return;
//     }

//     const userExist = await User.findOne({ email });
//     if (userExist) {
//         res.status(400).json({ message: "User already exists" });
//         return;
//     }

//     const userNameExist = await User.findOne({ name });
//     if (userNameExist) {
//         res.status(400).json({ message: "Username already taken" });
//         return;
//     }

//     const user = await User.create({ name, email, password });

//     if (user) {
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id),
//         });
//     } else {
//         res.status(400).json({ message: "Invalid user data" });
//     }
// };

// const fetchAllUsersController = async (req, res) => {

//     const keyword = req.query.search ? {
//         $or: [
//             { name: { $regex: req.query.search, $options: "i" } },
//             { email: { $regex: req.query.search, $options: "i" } },
//         ],
//     } : {};

//     const users = await User.find(keyword).find({
//         _id: { $ne: req.user._id },
//     });
//     res.json(users);
// };

// module.exports = {
//     loginController,
//     registerController,
//     fetchAllUsersController,
// };
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");

// Login Controller
const loginController = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        res.status(400).json({ message: "Name and password are required" });
        return;
    }

    const user = await User.findOne({ name });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

// Register Controller
const registerController = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(400).json({ message: "User already exists" });
        return;
    }

    const userNameExist = await User.findOne({ name });
    if (userNameExist) {
        res.status(400).json({ message: "Username already taken" });
        return;
    }
    try {
        const user = await User.create({ name, email, password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: "Failed to create user" });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }

});

// Fetch All Users Controller
const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search ? {
        $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
        ],
    } : {};

    const users = await User.find(keyword).find({
        _id: { $ne: req.user._id },
    });
    res.json(users);
});

module.exports = {
    loginController,
    registerController,
    fetchAllUsersController,
};
