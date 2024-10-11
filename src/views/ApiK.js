import { setApiKey } from "../lib/apiKey.js";
import Title from "../components/pageTittle.js";

export function Apik(props)
{
    const viewEl=document.createElement('div');


    const title = Title(); // Crea una instancia del componente page tittle
    viewEl.appendChild(title); // Añade el title al contenedor

    viewEl.className = 'api-container'; // Clase para el contenedor principal
    viewEl.innerHTML+=`
    <h1>Agregar API KEY</h1>
    <input type="text" id="apik" name="apik" placeholder="Ingresa/pega aquí tu API KEY aquí">
    <button id="save" name="save">Guardar API KEY</button>
    <p id="message"></p>
    `
    const inputEl = viewEl.querySelector('#apik');
    const saveButton = viewEl.querySelector('#save');
    const messageEl = viewEl.querySelector('#message');

    saveButton.addEventListener('click',()=>{
        const apikey = inputEl.value.trim();

        if(apikey) {
            //Guardar en el local
            setApiKey(apikey);
            messageEl.textContent='API KEY guardada';
            messageEl.style.color='green';
        }
        else
        {
            messageEl.textContent='API KEY no valida';
            messageEl.style.color='red';
        }
    });
    //ejecutar un advent listener
    return viewEl;
    }
