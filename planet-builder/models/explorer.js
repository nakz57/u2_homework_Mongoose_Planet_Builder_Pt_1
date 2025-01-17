const mongoose = require('mongoose')
const Schema = mongoose.Schema

const explorerSchema = new Schema(
  {
    name: { type: String, required: true },
    job: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Explorer', explorerSchema)
