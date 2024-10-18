import { navigateTo } from "../router.js";

function Key() {
  // Crear el elemento key
  const keyElement = document.createElement('header');

  // Definir el contenido del header
  keyElement.innerHTML = `
    <nav>
      <button id="homeBtn">Ir a Home</button>
    </nav>
  `;

  // Agregar funcionalidad de navegación a los botones
  const apiKeyBtn = keyElement.querySelector('#apiKeyBtn');

  apiKeyBtn.addEventListener('click', () => {
    navigateTo('/apikey'); // Navega a la vista de API Key
  });

  return keyElement;
}

export default Key;
