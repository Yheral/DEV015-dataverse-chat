import { navigateTo } from "../router.js";

function Key() {
  // Crear el elemento header
  const keyElement = document.createElement('nav');

  // Definir el contenido del header
  keyElement.innerHTML = `
    <button id="apiKeyBtn">Ir a API Key</button>
  `;

  // Agregar funcionalidad de navegación a los botones
  const apiKeyBtn = keyElement.querySelector('#apiKeyBtn');

  apiKeyBtn.addEventListener('click', () => {
    navigateTo('/apikey'); // Navega a la vista de API Key
  });

  return keyElement;
}

export default Key;
