// test/openAIApi.spec.js

import { communicateWithOpenAI } from '../src/utils/openAIApi.js';
import { getApiKey } from '../src/lib/apiKey.js';

jest.mock('../src/lib/apiKey.js', // Reemplazamos el módulo '../src/lib/apiKey.js'
  () => ({                         // con una función que devuelve un objeto.
    getApiKey: jest.fn(() =>        // Dentro del objeto, simulamos que getApiKey
      'fake-api-key'                // siempre devuelve 'fake-api-key'.
    ) 
  })
);

// Mock de fetch
global.fetch = jest.fn(() => // Sobrescribimos el método global fetch con una función mock usando jest.fn(). 
                             // Fetch es parte de la api del navegador, pero no esta disponible de manera nativa
                             // Esto nos permite interceptar y simular cualquier llamada a fetch durante las pruebas.

  Promise.resolve({          // fetch devuelve una promesa. Aquí, simulamos que la promesa se resuelve con un objeto que simula una respuesta exitosa.
    ok: true,                // En fetch, la propiedad "ok" indica si la respuesta HTTP fue exitosa. La establecemos en true para simular una respuesta correcta.
    
    json: () => Promise.resolve({  // json() es un método que se utiliza para extraer el cuerpo de la respuesta como JSON. 
                                   // Aquí lo simulamos con una promesa  que se resuelve con el contenido JSON que queremos devolver.
      
      choices: [{ message: { content: 'Esta es una respuesta de prueba de OpenAI' } }]  
                                   // choices es una propiedad que OpenAI incluye en sus respuestas. 
                                   // Estamos simulando que el contenido de la respuesta es 'Esta es una respuesta de prueba de OpenAI'. 
                                   // El array choices contiene mensajes que OpenAI genera; en este caso, solo hay un mensaje.
    })
  })
);


describe('communicateWithOpenAI', () => {
// Probamos que la función devuelve la respuesta esperada cuando todo funciona correctamente
test('debería devolver el contenido de la respuesta de OpenAI', async () => {
  const inputUser = '¿Cuál es la misión de mi organización?';
  const organizationName = 'Fundación Teletón';

  // Llamamos a la función que estamos probando
  const result = await communicateWithOpenAI(inputUser, organizationName);

  // Verificamos que el resultado sea el esperado
  expect(result).toBe('Esta es una respuesta de prueba de OpenAI');

  // Verificamos que fetch haya sido llamado con los parámetros correctos
  expect(fetch).toHaveBeenCalledWith('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer fake-api-key' // Verificamos que se usó la API Key simulada
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'user', content: inputUser },
        { role: 'system', content: 'Eres un asistente que está respondiendo preguntas sobre la organización Fundación Teletón.' }
      ],
      temperature: 0.5
    })
  });
});
});


