import mongoose from 'mongoose';

const Task = mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  hour:{
    type: String,
  },
  date:{
    type: Date,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }
});


export default mongoose.model('Task',Task);
