import {Category} from "../models/categoryModel.js";

export const allCategoriesRepo = async () => await Category.find()

export const createCategoryRepo = async (categoryObject) => {
    await Category.create(categoryObject)
}

export const deleteCategoryRepo = async (id) => {
    await Category.findByIdAndDelete(id)
}