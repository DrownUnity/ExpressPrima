import express from "express";
import routerApi from "./router/router.js";
const app = express();
const port = 3000;

app.use(express.json())
routerApi(app)

app.listen(port); 
console.log(`Server listen on port ${port}`);

app.get("/", (req, res) => {
    res.send("Hello World")
})

