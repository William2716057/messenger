const chat = document.getElementById('chat');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');


let messages = JSON.parse(localStorage.getItem('messages')) || [];
messages.forEach(renderMessage);


sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});


function sendMessage() {
    const user = usernameInput.value.trim() || 'Me';
    const text = messageInput.value.trim();
    if (!text) return;


    const msg = { user, text, time: new Date().toLocaleTimeString() };
    messages.push(msg);
    localStorage.setItem('messages', JSON.stringify(messages));
    renderMessage(msg);
    messageInput.value = '';
}


function renderMessage(msg) {
    const isMine = msg.user === (usernameInput.value || 'Me');


    const wrapper = document.createElement('div');
    const meta = document.createElement('div');
    const bubble = document.createElement('div');


    meta.className = 'meta';
    meta.textContent = `${msg.user} • ${msg.time}`;


    bubble.className = `bubble ${isMine ? 'mine' : 'theirs'}`;
    bubble.textContent = msg.text;


    wrapper.appendChild(meta);
    wrapper.appendChild(bubble);
    wrapper.style.alignSelf = isMine ? 'flex-end' : 'flex-start';


    chat.appendChild(wrapper);
    chat.scrollTop = chat.scrollHeight;
}