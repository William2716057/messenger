const chat = document.getElementById('chat');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');


// Load saved messages
const messages = JSON.parse(localStorage.getItem('messages')) || [];
messages.forEach(addMessageToChat);


sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});


function sendMessage() {
    const username = usernameInput.value.trim() || 'Anonymous';
    const text = messageInput.value.trim();


    if (!text) return;


    const message = {
        user: username,
        text: text,
        time: new Date().toLocaleTimeString()
    };


    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));


    addMessageToChat(message);
    messageInput.value = '';
}


function addMessageToChat(message) {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `<strong>${message.user}</strong> [${message.time}]: ${message.text}`;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}