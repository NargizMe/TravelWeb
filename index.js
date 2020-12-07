const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const flyes=require('./routers/flyRoute');
const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

mongoose.connect('mongodb://localhost/travel',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{ 
console.log('Mongoose connected');
})

app.use('/api',flyes);

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});