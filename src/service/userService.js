import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import db from '../models';

const salt = bcrypt.genSaltSync(10);


const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}
const createNewUser = async (data) => {
    let hashPass = hashUserPassword(data.password);
    try {
        let user = await db.User.create({
            email: data.email,
            password: hashPass,
            username: data.username
        })
        await user.save();
    } catch (e) {
        console.log(e);
    }

}

const getListUser = async () => {
    try {
        let listUser = await db.User.findAll();
        return listUser;
    } catch (e) {
        console.log(e);
    }
}
const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })
        await user.destroy();
        return ('Deleted')
    } catch (e) {
        console.log(e)
    }
}

const getUserById = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id },
            // raw: true
        })
        user.get({ plain: true })
        return user
    } catch (e) {
        console.log(e)
    }
}
const updateUser = async (data) => {
    try {
        //c1

        // let user = await db.User.findOne({
        //     where: { id: data.id }
        // })
        // if (user) {
        //     user.email = data.email;
        //     user.userName = data.username;
        // }
        // await user.save();

        //c2
        await db.User.update(
            {
                email: data.email,
                userName: data.username
            },
            {
                where: { id: data.id },
            }
        )
    } catch (e) {
        console.log(e)
    }
}
module.exports = { createNewUser, getListUser, deleteUser, getUserById, updateUser }