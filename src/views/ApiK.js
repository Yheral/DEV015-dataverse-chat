export function Apik(props)
{
    const viewEl=document.createElement('div');
    viewEl.innerHTML=`
    <h1>Agregar API KEY</h1>
    <input type="text" id="apik" name="apik" placeholder="Ingresa/pega aquí tu API KEY aquí">
    <button type="submit">Guardar API KEY</button>
    `
    return viewEl;
    }
