// components/pagetitle.js
function Title() {
  // Crea el elemento header con una plantilla literal
  const headerElement = document.createElement('div');
  headerElement.className = 'page-title'; // Asigna una clase para el estilo
  headerElement.innerHTML = `
      <h1>Bienvenido a Impacto Social Perú</h1>
    `;
  return headerElement;
}
export default Title; // Cambiado a 'Title' para que coincida con el nombre de la función
