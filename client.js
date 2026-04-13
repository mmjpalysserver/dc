let socket;
let username;

function login() {
  username = document.getElementById('username').value;
  socket = io("https://your-railway-app-url"); // Replace with Railway backend URL
  document.getElementById('chat').style.display = 'block';

  socket.on('chatMessage', (data) => {
    const div = document.createElement('div');
    div.textContent = `${data.user}: ${data.msg}`;
    document.getElementById('messages').appendChild(div);
  });
}

function sendMessage() {
  const msg = document.getElementById('msg').value;
  socket.emit('chatMessage', { user: username, msg });
  document.getElementById('msg').value = '';
}

function startVoice() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      console.log("Voice stream ready", stream);
      // Next step: send stream via WebRTC signaling
    })
    .catch(err => console.error("Mic error:", err));
}
