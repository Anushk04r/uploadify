import mongoose from 'mongoose'

const mediaSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fileName: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String },
  size: { type: Number },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Media || mongoose.model('Media', mediaSchema)