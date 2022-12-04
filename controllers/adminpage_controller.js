import {
    createBlogRepo,
    deleteOneBlogRepo,
    getBlogRepo,
    getOneBlogRepo,
    updateBlogRepo,
} from "../repositories/blog_repository.js";
import {allCategoriesRepo, createCategoryRepo, deleteCategoryRepo} from "../repositories/category_repository.js";
import {createUser, findUserById, userLoginRepo} from "../repositories/user_repository.js";
import {createToken, verifyToken} from "./helpers/JwtHepler.js";

//! Blog Controller
export const createBlog = async (req, res) => {
    const {title, content, author, category} = req.body;
    await createBlogRepo({title, content, author, category});
    res.redirect("/admin/blogs");
};

export const createBlogPage =async (req, res) => {
    const categories = await allCategoriesRepo()
    const token = req.cookies.jwt
    const userId= verifyToken(token)
    const user = await findUserById(userId.userId)
    res.render("adminPage/index", {categories,user});
};

export const allBlogsPage = async (req, res) => {
    const allBlogs = await getBlogRepo();
    res.render("adminPage/blog_page", {blogs: allBlogs});
};

export const deleteOneBlog = async (req, res) => {
    const {id} = req.params;
    await deleteOneBlogRepo(id);
    res.json({message: "blog deleted"});
};

export const updateBlogPage = async (req, res) => {
    const {id} = req.params;
    const categories = await allCategoriesRepo()
    const blog = await getOneBlogRepo(id);
    res.render("adminPage/update_page", {blog,categories});
};

export const updateBlog = async (req, res) => {
    const {id, title, content, author, category} = req.body;
    console.log(category)
    await updateBlogRepo(id, {title, content, author, category});
    res.redirect("/admin/blogs");
};

//? Category Controller
export const allCategories = async (req, res) => {
    const categories = await allCategoriesRepo()
    res.render('adminPage/all_categories', {categories})
}

export const createCategoryPage = (req, res) => {
    res.render('adminPage/create_category')
}
export const createCategory = async (req, res) => {
    const {categoryName} = req.body
    await createCategoryRepo({categoryName: categoryName})
    res.status(301).redirect('/admin/categories')
}

export const deleteCategory = async (req, res) => {
    const {id} = req.params
    await deleteCategoryRepo(id)
    res.json({message: 'category deleted'})
}

//! User Controller
export const userRegisterPage = (req,res) => {
    res.render('adminPage/register_user')
}

let userRegistered = false
export const userRegister = async (req,res) => {
    const {fullName,userName,password} = req.body
    await createUser({fullName,userName,password})
    userRegistered = true
    res.status(301).redirect('/admin/user-login')
}

let message = ''
export const userLoginPage = (req,res) => {
    res.status(200).render('adminPage/login_user', {userRegistered,message})
    userRegistered = false
    message = ''
}

export const userLogin = async (req,res) => {
    const {userName,password} = req.body
    const user = await userLoginRepo({userName,password})
    if(user === 'user not found' || user === 'wrong password'){
        message = user
        res.redirect('back')
    }else {
        const token = createToken(user._id)
        res.cookie('jwt',token, {maxAge: 60*60*24*1000})
        res.status(301).redirect('/admin/blogs')
    }
}

export const userLogout = (req,res) => {
    res.cookie('jwt','', {maxAge:1})
    res.status(301).redirect('/blog')
}