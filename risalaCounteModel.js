const mongoose = require("mongoose");
const RislaTargetSchema = new mongoose.Schema({
  unitName: { type: String,  },
  target: { type: Number, default: 20 },
});

const RislaTarget = mongoose.model("RislaTarget", RislaTargetSchema);
module.exports = RislaTarget;
