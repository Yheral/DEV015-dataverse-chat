// src/lib/openAIApi.js
import { getApiKey } from '../lib/apiKey.js';

//accedemos al mensaje del usuario y al name de la organización
export const communicateWithOpenAI = (inputUser,organizationName) => {
 

  // Obtener la API Key
  const apiKey = getApiKey();

  if (!apiKey) {
    console.error('Error: No se pudo obtener la API Key.');
    //return Promise.reject('API Key no disponible');
  }

  // Cuerpo de la solicitud a OpenAI, recuerda poner los roles.
    // Realizar la solicitud utilizando fetch y manejarla con then y catch  
  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Le decimos al servidor que estamos enviando un mensaje en formato JSON.
      'Authorization': `Bearer ${apiKey}`, // Enviamos nuestra "clave secreta" para que el servidor nos reconozca.
    },
    body: JSON.stringify(
      {
        model: 'gpt-4',
        messages:
        [
            { role: 'user', content: inputUser },
            //content aquí es como un promp de como deseas que se responda y base en ...
            { role: 'system', content: `Eres un asistente que está respondiendo preguntas sobre la organización ${organizationName}.` }
        ],
        temperature: 0.5,
      }
    ), // Convertimos el contenido de la solicitud en un formato que el servidor entiende.
      })
    
    .then((response) => {
      if (!response.ok) {
        // Si la respuesta del servidor no es "ok", se lanza un error
        throw new Error(`Error al comunicarse con OpenAI: ${response.statusText}`);
      }
      return response.json(); // Convertir la respuesta a JSON
    })
    .then((data) => {
      if (data && data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        console.error('Respuesta inesperada de OpenAI:', data);
        return null;
      }
    })
    .catch((error) => {
      console.error('Error al comunicarse con OpenAI:', error);
      throw error;
    });
};
