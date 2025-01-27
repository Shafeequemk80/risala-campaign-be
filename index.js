const express = require("express");
const mongoose = require("mongoose");
const Counter = require("./RisalaListModel");
var cors = require("cors");
const app = express();
const PORT = 5000;
const {
  addPossibilityList,
  getPossibilityList,
  addTodayList,
  getTodayList,
  addTosubscribe,
  addToRejected,
  getsubscribeList,
  getrejectedList,
  getCount,
  addUnitCount
} = require("./RislaListController");

app.use(express.static("public"));
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://shafeequemk80:tFTt2oBnNIHFZCc7@cluster0.7scgnqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");

app.post("/:unit/addtopossibilitylist", addPossibilityList);
app.get("/:unit/gethoplist", getPossibilityList);
app.get("/:unit/addtotodaylist/:id",addTodayList);
app.get("/:unit/gettodaylist", getTodayList);
app.get("/:unit/addtosubscribe/:id", addTosubscribe);
app.get("/:unit/gettosubscribe", getsubscribeList);
app.get("/:unit/addtoRejected/:id", addToRejected);
app.get("/:unit/gettoreject", getrejectedList);
app.get('/:unit/count', getCount);

app.post('/add-unit', addUnitCount);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
