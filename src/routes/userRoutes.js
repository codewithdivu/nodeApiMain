import express from "express";
import {
  deleteUser,
  getAllUser,
  getUserByID,
} from "../controllers/userController.js";
import isAuthenticatedMiddleware from "../middlewares/isAuthenticatedMiddleware.js";

const UserRouter = express.Router();

UserRouter.route("/").get(isAuthenticatedMiddleware, getAllUser);
UserRouter.route("/:id")
  .get(isAuthenticatedMiddleware, getUserByID)
  .delete(isAuthenticatedMiddleware, deleteUser);

export default UserRouter;
