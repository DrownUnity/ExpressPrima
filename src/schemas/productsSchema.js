import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);
const price = Joi.number().positive();
const image = Joi.string().uri();
const category = Joi.number();
const stock = Joi.number().positive();

export const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    category: category.required(),
    stock: stock.required()
});

export const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image,
    category: category,
    stock: stock
})

export const getProductSchema = Joi.object({
    id: id.required()
})
