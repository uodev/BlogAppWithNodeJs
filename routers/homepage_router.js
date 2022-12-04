import { Router } from "express";
import { getBlog, getOneBlog } from "../controllers/homepage_controller.js";

export const homePageRouter = Router();

homePageRouter.get("/", getBlog);

homePageRouter.get("/:id", getOneBlog);
