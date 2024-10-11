// components/GoToKeyButton.js
import { navigateTo } from "../router.js"; // Asegúrate de importar navigateTo

function GoToKeyButton() {
    const button = document.createElement('button');
    button.id = 'keyButton';
    button.innerText = 'Ir a Key'; // Texto del botón

    // Agregar evento click para el botón que lleva a la vista Key
    button.addEventListener('click', () => {
        navigateTo('/apikey'); // Cambia a la vista de Key (API Key)
    });

    return button; // Retorna el botón creado
}

export default GoToKeyButton; // Exporta el componente del botón
