function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive")
    setTimeout(fn, 1);
  else
    document.addEventListener("DOMContentLoaded", fn);
}
docReady(function () {

  // code goes here...
  var socket = io('ws://localhost:8080', { transports: ['websocket'] });
  socket.on('connect', function () {
    console.log('connected!');
    socket.emit('greet', { message: 'Hello Mr.Server!' });
  });

  socket.on('respond', function (data) {
    console.log(data);
  });

  socket.on('userCount', function (data) {
    console.log(data.userCount);
    document.getElementById('userCount').textContent = data.userCount;
  });
});
