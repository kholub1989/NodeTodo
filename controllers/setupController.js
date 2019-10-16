var Todos = require('../models/todomodel');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {
    // seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        idDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        idDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn Node',
        idDone: false,
        hasAttachment: false
      }
    ]
    Todos.create(starterTodos, function(err, results) {
      res.send(results)
    });
  });
}