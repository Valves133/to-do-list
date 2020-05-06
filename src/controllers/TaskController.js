import mongoose from 'mongoose';

import '../models/task';

const Task = mongoose.model('Task');

class TaskController {
  async store(req, res) {
    const task = await Task.create(req.body);
    
    return res.json(task);
  }

  async show(req, res) {
    const task = await Task.find()

    return res.json(task);
  }

  async index(req, res) {
    const task = await Task.findById(req.params.id);

    return res.json(task);
  }

  async update(req, res) {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.json(task);
  }

  async delete(req ,res) {
    const task = await Task.findByIdAndRemove(req.params.id);

    return res.send('Task removed');
  }

}

export default new TaskController();