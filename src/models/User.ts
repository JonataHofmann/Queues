import mongoose, { mongo, Schema } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: Date,
    required: false,
  },
})

export default mongoose.model('user', UserSchema)
