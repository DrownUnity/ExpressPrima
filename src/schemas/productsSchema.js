import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().positive();
const image = Joi.string().uri();
const category = Joi.string();

export const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image,
    category: category,
})

export const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image,
    category: category,
})

export const getProductSchema = Joi.object({
    id: id.required()
})