import { Router } from "express";
import { categoryRouter } from "./categoryRouter.js";
import { ProductRouter } from "./productsRouter.js";

const routerApi = (app) => {
    const router = Router();
    app.use("/api/V1", router); 
    router.use("/categories", categoryRouter);
    router.use("/products", ProductRouter)
};

export default routerApi;
