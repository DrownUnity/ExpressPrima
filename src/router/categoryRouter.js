import { Router } from "express";
import CategoryService from "../services/categoryServices.js";
import validatorHandler from "../middlewares/validatorHandler.js";
import { createCategorySchema, updateCategorySchema, getCategorySchema } from "../schemas/categorySchema.js";

const router = Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
    try {
      const categories = await service.find();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  });
  
  router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const categoryId = parseInt(id)
        const category = await service.findOne(categoryId);

        if(!category){
          return res
            .status(404)
            .json({ error: `No category found with ID ${categoryId}` });
        }

        res.json(category);
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.post('/',
    validatorHandler(createCategorySchema, 'body'),
    async (req, res, next) => {
      try {
        const body = req.body;
        const newCategory = await service.create(body);
        res.status(201).json(newCategory);
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.patch('/:id',
    validatorHandler(getCategorySchema, 'params'),
    validatorHandler(updateCategorySchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const categoryId = parseInt(id)
        const body = req.body;
        const category = await service.update(categoryId, body);

        if(!category){
          return res
            .status(404)
            .json({ error: `No category found with ID ${categoryId}` });
        }

        res.json(category);
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.delete('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const categoryId = parseInt(id)
        await service.delete(categoryId);

        if(!categoryId){
          return res
            .status(404)
            .json({ error: `No category found with ID ${categoryId}` });
        }

        res.status(201).json({id});
      } catch (error) {
        next(error);
      }
    }
  );

export {router as categoryRouter};