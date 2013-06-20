/*
 * GET home page.
 */
var exec = require('child_process').exec;
  
exports.index = function(req, res){
  res.render('index');
};

exports.grains = function(req, res) {
  function puts(error, stdout, stderr) { res.send(stdout) };
  exec("salt-call grains.items --out=json", puts);
};

exports.statetree = function(req, res) {
  function puts(error, stdout, stderr) { res.send(stdout) };
  exec("salt-call state.show_highstate --out=json", puts);
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};