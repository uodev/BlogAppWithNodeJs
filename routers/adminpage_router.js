import {Router} from "express";
import {
    allBlogsPage, allCategories,
    createBlog,
    createBlogPage, createCategory, createCategoryPage, deleteCategory,
    deleteOneBlog,
    updateBlog,
    updateBlogPage, userLogin, userLoginPage, userLogout, userRegister, userRegisterPage,
} from "../controllers/adminpage_controller.js";

export const adminPageRouter = Router();

//! Blog Router
adminPageRouter.get("/blogs", allBlogsPage);

adminPageRouter.get("/create-blog", createBlogPage);
adminPageRouter.post("/create-blog", createBlog);

adminPageRouter.delete("/delete-blog/:id", deleteOneBlog);

adminPageRouter.put("/update", updateBlog);
adminPageRouter.get("/update-blog/:id", updateBlogPage);

//? Category Router
adminPageRouter.get('/categories', allCategories)

adminPageRouter.get('/create-category', createCategoryPage)
adminPageRouter.post('/create-category', createCategory)

adminPageRouter.delete('/delete-category/:id', deleteCategory)

//! User Router
adminPageRouter.get('/user-register', userRegisterPage)
adminPageRouter.post('/user-register', userRegister)

adminPageRouter.get('/user-login', userLoginPage)
adminPageRouter.post('/user-login',userLogin)

adminPageRouter.get('/user-logout',userLogout)