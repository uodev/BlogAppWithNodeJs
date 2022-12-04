import express from "express";
import methodOverride from "method-override";
import * as dotenv from "dotenv";
import connectDatabase from "./repositories/db.js";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { homePageRouter } from "./routers/homepage_router.js";
import { adminPageRouter } from "./routers/adminpage_router.js";
import {requiredAuth} from "./middlewares/check_user.js";

const app = express();

//? dotenv setting
dotenv.config();

//! View engine setting
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//!Globals settings and middlewares
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(methodOverride("_method"));


//! Routers
app.use("/blog", homePageRouter);
app.use("/admin",requiredAuth, adminPageRouter);

app.listen(process.env.PORT, () => {
  console.log("Sunucu çalışıyor!");
  connectDatabase();
});
