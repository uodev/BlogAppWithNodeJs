import Blog from "../models/blogModel.js";

export const getBlogRepo = async () =>
  await Blog.find().sort({ createdAt: -1 }).populate('category');

export const createBlogRepo = async (blogObject) =>
  await Blog.create(blogObject);

export const getOneBlogRepo = async (id) => await Blog.findById(id).populate('category');

export const deleteOneBlogRepo = async (id) => {
  await Blog.findByIdAndDelete(id);
};

export const updateBlogRepo = async (id, newBlog) => {
  await Blog.findByIdAndUpdate(id, newBlog);
};
