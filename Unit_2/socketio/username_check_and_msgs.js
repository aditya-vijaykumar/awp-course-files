const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile('D://node class//socketExample//index2.html');
});

let user = [];

io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('setUsername',(data)=>{
       if(user.indexOf(data)>-1){
           socket.emit('userExists',data+'name is taken');
       }
       else{
           user.push(data);
           socket.emit('userSet',{username:data});
       }
       socket.username = data;
    });
    socket.on('disconnect',(data)=>{
        console.log(user);
        io.emit('is_online','<i>'+socket.username+' left the chat..</i>');
    });
    socket.on('msg',(data)=>{
        io.sockets.emit('newmsg',data);
    });
});

http.listen(8080);
