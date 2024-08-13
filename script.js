const socket = io('http://localhost:3000')
const messageForm
socket.on('chat-message', data =>{
    console.log(data)
})