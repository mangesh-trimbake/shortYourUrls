const mongoose = require("mongoose");
// const crudPlugin = require('./plugins/crud_plugin.js');
const Schema = mongoose.Schema;

const shortId = require("shortid");

const urlSchema = new Schema(
  {
    full_url: {
      type: String,
      required: true,
    },
    shorten_url: {
      type: String,
      required: true,
      default: shortId.generate,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

require("./plugins/crud_plugin")(urlSchema);

var Url = mongoose.model("Url", urlSchema);
module.exports = Url;
