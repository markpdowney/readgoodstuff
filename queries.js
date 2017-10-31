var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/rgs';
var db = pgp(connectionString);

function getAllBooks(req, res, next) {
  db.any('select * from books')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
function getBook(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from books where id = $1', pupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE book'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
module.exports = {
  getAllBooks: getAllBooks,
  getBook: getBook,
};
