import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/task',{ useNewUrlParser: true, useUnifiedTopology: true });