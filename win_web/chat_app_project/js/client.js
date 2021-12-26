const socket = io('http://localhost:8000');

const form = document.getElementById('send-form');
const messageInput = document.getElementById('Inp');
const messageContainer = document.querySelector('.container');

const name = prompt('Enter your name to join');
socket.emit('new-user-joined',name);

var audio = new Audio('ping.mp3');

const append = (message ,position)=>{
    const elem = document.createElement('div');
    elem.innerText =message;
    elem.classList.add('message');
    elem.classList.add(position);
    messageContainer.append(elem);
    if(position == 'left'){
        audio.play();
    }
};

form.addEventListener('submit',(e)=>{
    // prevent reloading
    e.preventDefault();
    const message= Inp.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    Inp.value='';
})

socket.on('user-joined',name => {
    append(`${name} joined the chat`,'right');
});

socket.on('recieve',data => {
    append(`${data.name}: ${data.message}`,'left');
});

socket.on('left',name=>{
    append(` ${name} left the chat`,'left');
});
