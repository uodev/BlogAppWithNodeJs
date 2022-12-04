import {
  getBlogRepo,
  getOneBlogRepo,
} from "../repositories/blog_repository.js";

export const getBlog = async (req, res) => {
  const allBlogs = await getBlogRepo();
  const auth = req.cookies.jwt
  res.render("blogPage/index", { allBlogs, title: "Anasayfa", auth });
};

//!PAGINATION
export const getOneBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await getOneBlogRepo(id);
  const auth = req.cookies.jwt
  res.render("blogPage/detay", { blog, title: "Detay",auth });
};
