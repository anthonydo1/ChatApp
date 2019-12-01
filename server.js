const io = require("socket.io")(3000)

const users = {}

io.on('connection', socket => {

  socket.on('new-user', name => {
    users[socket.id] = name
  }) 

  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]})
  })

})

