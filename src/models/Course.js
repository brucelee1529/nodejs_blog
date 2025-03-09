const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String, default: "ExpressJS" },
  description: { type: String, default: "NodeJS and ExpressJs" },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatetedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
