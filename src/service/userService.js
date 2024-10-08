import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

const salt = bcrypt.genSaltSync(10);
//create connection db
let connection;
const initConnection = async () => {
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',  // thêm password nếu có
            database: 'jwt'
        });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
};
initConnection();

const hashUserPassword = (password) => {
    let hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}
const createNewUser = (data) => {
    let hashPass = hashUserPassword(data.password);

    connection.query(
        'INSERT INTO users(email,password,username) VALUES(?,?,?)', [data.email, hashPass, data.username],
        function (err, result, fields) {
            console.log(err)
        }
    )
}

const getListUser = async () => {
    let users = [];
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        users = rows;
        return users;
    } catch (e) {
        console.log(e);
    }
}
const deleteUser = async (id) => {
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id])
        return rows
    } catch (e) {
        console.log(e)
    }
}

const getUser = async (id) => {
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id=?', [id])
        return rows
    } catch (e) {
        console.log(e)
    }
}
const updateUser = async (data) => {
    try {
        const [rows, fields] = await connection.execute('UPDATE users SET email=?,username=? WHERE id=?', [data.email, data.username, data.id])
        return rows
    } catch (e) {
        console.log(e)
    }
}
module.exports = { createNewUser, getListUser, deleteUser, getUser, updateUser }