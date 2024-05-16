import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);

export const createCategorySchema = Joi.object({
  name: name.required(),
});

export const updateCategorySchema = Joi.object({
  name: name,
});

export const getCategorySchema = Joi.object({
  id: id.required(),
});