import { Router } from "express";
import ProductService from "../services/productsServices.js";
import validatorHandler from "../middlewares/validatorHandler.js";
import { createProductSchema, updateProductSchema, getProductSchema } from "../schemas/productsSchema.js";

const router = Router();
const service = new ProductService();

router.get("/", async(req, res, next) => {
    try {
        const products = await service.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

  
router.get('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const idNumber = parseInt(id)
    const product = await service.findOne(idNumber);
    res.json(product);
  } catch (error) {
    next(error);
  }
}
);

router.post("/", validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  }
);

router.patch("/id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async(req, res, next) =>{
    try {
      const {id} = req.params;
      const idNumber = parseInt(id)
      const body = req.body;
      const product = await service.update(idNumber, body);
      res.json(product)
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/id", 
  validatorHandler(getProductSchema, "params"),
  async(req, res, next) => {
    try {
      const { id } = req.params;
      const idNumber = parseInt(id)
      await service.delete(idNumber);
      res.status.json({id})
    } catch (error) {
      next(error)
    }
  }
);

export {router as ProductRouter}