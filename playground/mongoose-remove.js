const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove


// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a7f3709be43fb6a2f4f60fb').then((todo) => {
    console.log(todo);
});