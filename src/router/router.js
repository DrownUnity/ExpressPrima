import { Router } from "express";
import { categoryRouter } from "./categoryRouter.js";

const routerApi = (app) => {
    const router = Router();
    app.use("/api/V1", router); 
    router.use("/categories", categoryRouter); 
};

export default routerApi;
