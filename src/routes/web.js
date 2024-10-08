import express from "express";
import homeController from '../controller/homeController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.handleBlaBla);
    router.get("/user", homeController.handleUser);
    router.post("/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.deleteUser);
    router.get("/update-user/:id", homeController.getUpdateUser);
    router.post("/user/update-user-by-id", homeController.updateUserById)

    return app.use("/", router);
}

export default initWebRoutes