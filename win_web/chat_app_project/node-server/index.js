// handle socket connections
const io =require('socket.io')(8000,{
    cors:{origin: '*',}
});

const users ={};

// listeners
// builtin 
io.on('connection', socket=>{
    // If any new user joins 
    socket.on('new-user-joined',name =>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });

    // send message
    socket.on('send',message=>{
        // emit to all instances
        socket.broadcast.emit('recieve',{message: message,name: users[socket.id]});
    });

    // builtin event get fired when some user disconnect
    socket.on('disconnect',data => {
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
    });
});