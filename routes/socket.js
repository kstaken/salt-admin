/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });

  setInterval(function () {
    socket.emit('send:event', {
      event: "Simulated event " + (new Date()).toString()
    });
  }, 1000);
};
