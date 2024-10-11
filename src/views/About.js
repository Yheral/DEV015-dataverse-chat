export function About(props) {
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

  return viewEl;
}

//usar la función de comunicate e importar
