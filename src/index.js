import express, { json } from "express";
const app = express();
const port = 3000;

app.use(express.json())

app.listen(port); 
console.log(`Server listen on port ${port}`);

app.get("/", (req, res) => {
    res.send("Hello World")
})
