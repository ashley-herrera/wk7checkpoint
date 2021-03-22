import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Note = new Schema(
  {
    body: { type: String, required: true },
    // bugId: { type: Object, ref: 'Bug', required: true }, // type: ObjectId?
    creatorId: { type: String, required: true }
  },

  { timestamps: true, toJSON: { virtuals: true } }
)

export default Note
