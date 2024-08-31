const mongoose = require('mongoose')

const Todo= new mongoose.Schema({
    task:String,
    done:{
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", Todo)
module.exports = TodoModel
