const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a7d0dec5bb0c750ed3d988411';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


//query the users collection (grab an id)
// user.findbyid and get the idea
//--is not found, is found, handle errors

var id = '5a77c5707e56437289705420';

User.findById(id).then((user) => {
    if (!user) {
        return console.log("User not found")
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));