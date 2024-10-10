import userService from '../service/userService';
let handleBlaBla = (req, res) => {
    return res.render('home.ejs')
}
let handleUser = async (req, res) => {
    let user = await userService.getListUser()
    return res.render('user.ejs', { listUser: user })
}
let handleCreateNewUser = (req, res) => {
    let data = {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    }

    userService.createNewUser(data)
    return res.redirect('/user');
}

let deleteUser = async (req, res) => {
    let id = req.params.id;
    await userService.deleteUser(id);
    return res.redirect('/user')
}
let getUpdateUser = async (req, res) => {
    let id = req.params.id;
    let userInfo = await userService.getUserById(id);
    return res.render('update-user.ejs', { userInfo })
}

let updateUserById = async (req, res) => {
    let data = {
        email: req.body.email,
        username: req.body.username,
        id: req.body.id
    }
    await userService.updateUser(data);
    return res.redirect('/user');

}
module.exports = { handleBlaBla, handleUser, handleCreateNewUser, deleteUser, getUpdateUser, updateUserById }