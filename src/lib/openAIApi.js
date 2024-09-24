// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
try {    
    //Aquí es donde debes implementar la petición con fetch o axios
   const apiKey=getApiKey();
//Cuerpo de la solicitud a OPEN IA
const requestBody ={
    model: "gpt-4",
    messages: messages,
    temperature:0.5,
};
const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: 
    {
        'Content-Type': 'application/json', // Le decimos al servidor que estamos enviando un mensaje en formato JSON.
        'Authorization': `Bearer ${apiKey}` // Enviamos nuestra "clave secreta" para que el servidor nos reconozca.
    },
      body: JSON.stringify(requestBody) // Convertimos el contenido de la solicitud en un formato que el servidor entiende.
    });

    if (!response.ok) {
        // Manejar el error sin vista de error
        console.error(`Error al comunicarse con OpenAI: ${response.statusText}`);
        return; // Salimos de la función para no continuar
    }
    const data = await response.json();
    return data.choices[0].message.content;
    }
    catch (error) {
        console.error('Error al comunicarse con OpenAI:', error);
        throw error;
      }
};
