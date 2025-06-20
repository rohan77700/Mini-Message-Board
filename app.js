const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});