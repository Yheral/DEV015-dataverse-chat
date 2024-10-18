// src/lib/apiKey.js

export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  //Implementamos el localstorage para buscar un dato guardado como apikey
  return localStorage.getItem('apiKey');
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  // name = nombre del elemento
  // content = Contenido del elemento
  return localStorage.setItem('apiKey',key);
}; 