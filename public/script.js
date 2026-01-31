const splashScreen = document.getElementById('splash-screen');
const chatContainer = document.getElementById('chat-container');

window.addEventListener('load', () => {
  setTimeout(() => {
    splashScreen.style.opacity = '0';
    splashScreen.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
      splashScreen.style.display = 'none';
      chatContainer.style.display = 'flex';
    }, 500);
  }, 4000);
});

const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Store conversation history for context
// letconversationHistory = [];
let conversationHistory = [
  {
    role: 'user',
    text: `
Kamu adalah AI chatbot umum.
Tugasmu adalah menjawab pertanyaan, mengobrol santai, dan membantu pengguna secara natural.
Gunakan Bahasa Indonesia jika pengguna berbahasa Indonesia.
Gunakan Bahasa Inggris jika pengguna berbahasa Inggris.
Jangan mengoreksi tata bahasa kecuali jika pengguna secara eksplisit meminta koreksi.
Jawablah dengan gaya santai dan tidak terlalu panjang.
`
  }
];


form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';
  input.disabled = true;
  form.querySelector('.send-button').disabled = true;

  // Add user message to conversation history
  conversationHistory.push({
    role: 'user',
    text: userMessage
  });

  try {
    // Send message to backend API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        conversation: conversationHistory
      })
    });

    const data = await response.json();

    if (response.ok) {
      const botMessage = data.result;
      
      // Add bot response to conversation history
      conversationHistory.push({
        role: 'model',
        text: botMessage
      });
      
      appendMessage('bot', botMessage);
    } else {
      appendMessage('bot', '❌ Error: ' + (data.message || 'Unknown error occurred'));
    }
  } catch (error) {
    console.error('Error:', error);
    appendMessage('bot', '❌ Connection error. Please try again.');
  } finally {
    input.disabled = false;
    form.querySelector('.send-button').disabled = false;
    input.focus();
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  const textDiv = document.createElement('div');
  textDiv.textContent = text;
  msg.appendChild(textDiv);
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
