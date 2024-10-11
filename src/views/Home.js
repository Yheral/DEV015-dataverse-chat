import Header from "../components/Header.js";
import data from "../data/dataset.js"
//NOTA DE ERROR, como iba navegar si no importaste navigate
import { navigateTo } from "../router.js"

export function Home(props) {
    const viewEl = document.createElement('div');
    
    // Llama al componente Header y lo añade al viewEl
    
    const header1 = Header(); // Crea una instancia del componente Header
    viewEl.appendChild(header1); // Añade el Header al contenedor

    viewEl.innerHTML += `
    <button id="keyButton">🔑 Ir a Key</button> <!-- Botón para ir a la vista Key -->
    <ul id="data-list"></ul>
  `;
   const keyButton = viewEl.querySelector('#keyButton');
   keyButton.addEventListener('click',()=>
  {
    navigateTo('/apikey');
  });
  
  // Crear los elementos <li> para cada dato
  const listItems = data.map((element) => 
  {
    const li = document.createElement('li');
    li.setAttribute('itemtype', 'http://schema.org/Organization');
    li.setAttribute('itemscope', '');

    // Agregar la información del elemento a <li>
    li.innerHTML = `
    <div class="card">
      <img src="${element.imageURL}" alt="${element.name}" itemprop="image">
      <h3 itemprop="name">${element.name}</h3>
      <p itemprop="description">${element.shortDescription}</p>
      <p><strong>Año de fundación:</strong> <span itemprop="foundingDate">${element.facts["Año de fundación"]}</span></p>
      <p><strong>ODS de mayor identificación:</strong> 
        <span itemprop="identifier">${element.facts["ODS de mayor identificación"].join(', ')}</span>
      </p>
      <p><strong>Regiones de impacto:</strong> 
        <span itemprop="region">${element.facts["Regiones de impacto"].join(', ')}</span>
      </p>
      <a href="${element.extraInfo.web}" itemprop="url" class="web-link">Visitar Web</a>
      <button class="chat-button">Chatear</button>
    </div>
  `;
    //Agregamos a nuestro button el evento para cambiar de vista
  const chatButton=li.querySelector(".chat-button");
  chatButton.addEventListener("click",()=>
  navigateTo("/chat",{name:element.name,id:element.id}));
  
    return li;
  });

  // Añadir los elementos <li> al <ul>
  const dataList = viewEl.querySelector('#data-list');
  listItems.forEach(li => dataList.appendChild(li));

  return viewEl;
}
  