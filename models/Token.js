const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
     id: Number,
      status: {
        type: String,
        default: "green",
      },
      project: String,
      name: String,
      conditions: String,
      volume: Number,
      ROI: Number,
      freeFloat: Number,
      insuranceHedge: Number,
    
  
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
