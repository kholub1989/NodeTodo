var mongoose = require('mongoose');

var Scema = mongoose.Schema;

var todoSchema = new Scema({
  username: String,
  todo: String,
  idDone: Boolean,
  hasAttachment: Boolean
});

var Todos = mongose.model('Todos', todoSchema);

module.exports = Todos;