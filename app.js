const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors");
const ProductRoute = require("./routes/ProductRoute");

const app = express();
mongoose.connect("mongodb://root:root@127.0.0.1:27017/mernstack_db?authSource=admin");
const db = mongoose.connection;
db.on(`error`, (error) => console.log(error));
db.once("open", () => console.log(`database connected....`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ProductRoute);
app.listen(4000, () => console.log(`Server is running on http://localhost:4000`));
