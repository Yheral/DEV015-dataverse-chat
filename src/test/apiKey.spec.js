// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';



describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    localStorage.setItem('apiKey', '12345'); // Establecemos un valor en localStorage
    expect(getApiKey()).toBe('12345'); // Comprobamos que getApiKey devuelve el valor correcto
  });

  it('debería devolver null si no hay API Key', () => {
    localStorage.removeItem('apiKey'); // Aseguramos que no haya clave en localStorage
    expect(getApiKey()).toBeNull(); // Comprobamos que devuelve null si no hay clave
  });
});

describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    setApiKey('67890'); // Establecemos una API Key usando setApiKey
    expect(localStorage.getItem('apiKey')).toBe('67890'); // Verificamos que se guardó correctamente
  });
});
