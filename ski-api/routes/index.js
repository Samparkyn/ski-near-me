const skiRoutes = require('./routes');

module.exports = function(app, db) {
  skiRoutes(app, db);
  
  console.log(skiRoutes);
};
