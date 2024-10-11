// components/Header.js
function Header() {
    // Crea el elemento header con una plantilla literal
    const headerElement = document.createElement('header');
    headerElement.innerHTML = `
      <h1>Bienvenido a Impacto Social Perú</h1>
      <p>Conectando organizaciones sociales para un Perú más fuerte y solidario.</p>
    `;
    
    return headerElement;
  }
  
  export default Header;
  