import { communicateWithOpenAI } from "../lib/openAIApi.js";
export function Chat(props) {

const viewEl = document.createElement('div');
  
viewEl.innerHTML = `
<div class="chat-container">
    <div class="chat-header">
        <h2>Chat con ${props.name}</h2>
        <p>Conversa y conoce más sobre esta organización.</p>
    </div>
    <div class="chat-box" id="chatMessages">
        <!-- Aquí se mostrarán los mensajes del chat -->
    </div>
    <div class="chat-input-container">
        <textarea class="chat-input" id="chatBox" rows="3" placeholder="Escribe tu mensaje aquí..."></textarea>
        <button class="chat-send-btn" id="sendMessage">Enviar</button>
    </div>
</div>
`;
  const chatMessagesEl = viewEl.querySelector('#chatMessages');
  const chatBoxEl = viewEl.querySelector('#chatBox');
  const sendMessageBtn = viewEl.querySelector('#sendMessage');

  // Manejador para el botón de enviar mensaje
  sendMessageBtn.addEventListener('click', () => {
    const userMessage = chatBoxEl.value.trim();

    if (userMessage) {
      // Mostrar el mensaje del usuario en el chat
      const userMessageEl = document.createElement('div');
      userMessageEl.textContent = userMessage;
      chatMessagesEl.appendChild(userMessageEl);

      // Limpiar el campo de texto
      chatBoxEl.value = '';

      // Llamar a la función communicateWithOpenAI con el mensaje del usuario
      communicateWithOpenAI(userMessage, props.name)

      //value del input que esta usando + de donde saca la organización

        .then((response) => {
          // Mostrar la respuesta de OpenAI en el chat
          const assistantMessageEl = document.createElement('div');
          assistantMessageEl.textContent = response;
          chatMessagesEl.appendChild(assistantMessageEl);

          // Desplazar hacia abajo para mostrar el nuevo mensaje
          chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
        })
        .catch((error) => {
          console.error('Error al comunicarse con OpenAI:', error);
        });
    }
  });

return viewEl;
}

