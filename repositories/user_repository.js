import {User} from "../models/userModel.js";
import {comparePassword} from "../controllers/helpers/BcryptHelper.js";

export const createUser = async (userObject) =>
    await User.create(userObject)

export const findUserById = async (userId) => await User.findById(userId)

export const userLoginRepo = async (userObject) => {
    const user = await findUserWithUsername(userObject.userName)
    if(user) {
        const userInfo = await comparePassword(userObject.password,user.password)
        if(userInfo) return user
        else return 'wrong password'
    }
    else return 'user not found'
}

export const findUserWithUsername = async (username) => await User.findOne({userName:username})
