import { setApiKey } from "../lib/apiKey.js";


export function Apik(props)
{
    const viewEl=document.createElement('div');

    viewEl.innerHTML=`
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
    //verificar el submit si sale un error
    return viewEl;
    }
//importa set apikey, para cuanddo el boton 
//add event para guardar la apikey
