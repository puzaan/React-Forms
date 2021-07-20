import User from "../module/userModel.js";
import AsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";


// des auth user and get token
// rout Post/api/user/login
// acc public
const authUser = AsyncHandler (async (req, res) => {
    //Parse data from req body
    const { email, password } = req.body;
    // find user if it exit in database

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        // User is valid -> Log in
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
    // res.send({
    //     message: "Log in Successfully"
    // })
})


// des get user profile
//rout get/api/user/profile
//acc private


export const getUserProfile = AsyncHandler(async (req, res)=> {
    const user = await User.findById( req.user._id);
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(404)
        throw new Error ('user belonging to ths token no longer exist');
    }
})

// des featch all Users
// rout GET/api/products
//access public
const getUsersList = AsyncHandler(async (req, res) => {
    let users = await User.find({});
    res.json(users);
})

// des featch user bit its id
// rout GET/api/:id
//access public

const getuser = AsyncHandler(async (req, res) => {
    let user = await User.findById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found')
    }
})


// des register a new user 


const registeruser = AsyncHandler (async (req , res)=> {
    const {name, email, password} = req.body;

    const userExit = await User.findOne({email});

    if (userExit){
        res.status(404);
        throw new Error ('User already exist')
    }

    const user = await User.create({
        name,
        email,
        password,
        
    })
    if(user){
        res.status(201);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)

        })
    }else{
        res.status(404)
        throw new Error("invalid Data")
    }
});


const updateUserProfile = AsyncHandler(async (req , res)=> {
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name;
        user.email= req.body.email || user.email;
        if(req.body.password){
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),

        })
    }else{
        res.status(404);
        throw new Error(
            "User does not found"
        )
    }
})

export { getUsersList, getuser, authUser ,registeruser, updateUserProfile}