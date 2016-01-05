var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'play foot',
    completed: true
}];

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

//Get /todos
app.get('/todos', function (req, res) {
    res.json(todos);
});

//Get /todos/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedToDo;
    todos.forEach(function (todo) {
        if (todoId === todo.id) {
            matchedToDo = todo;
        }
    });
       
    if (matchedToDo) {
        res.json(matchedToDo);
    } else {
        res.status(404).send();
    }

});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT + '!');
});
