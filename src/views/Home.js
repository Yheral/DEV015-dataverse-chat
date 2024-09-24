import data from "../data/dataset.js"
//NOTA DE ERROR, como iba navegar si no importaste navigate
import { navigateTo } from "../router.js"

export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
    <h1>Vista home</h1>
    <ul id="data-list"></ul>
  `;

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
        <p>Año de fundación: <span itemprop="foundingDate">${element.facts["Año de fundación"]}</span></p>
        <p>ODS de mayor identificación: 
          <span itemprop="identifier">${element.facts["ODS de mayor identificación"].join(', ')}</span>
        </p>
        <p>Regiones de impacto: 
          <span itemprop="region">${element.facts["Regiones de impacto"].join(', ')}</span>
        </p>
        <a href="${element.extraInfo.web}" itemprop="url">Web</a>
        <button class="chat-button">Chatear</button>
      </div>
    `;
    //Agregamos a nuestro button el evento para cambiar de vista
  const chatButton=li.querySelector(".chat-button");
  chatButton.addEventListener("click",()=>
  navigateTo("/about",{name:element.name,id:element.id}));
  
    return li;
  });

  // Añadir los elementos <li> al <ul>
  const dataList = viewEl.querySelector('#data-list');
  listItems.forEach(li => dataList.appendChild(li));

  return viewEl;
}
  