import "./lib/db";
import express from "express";
import cors from "cors";
import { router } from './router';


const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use('/public', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());
app.use(router);
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
