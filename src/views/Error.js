export function Error(props)
{
    const viewEl=document.createElement("div");
    viewEl.innerHTML=
    `<h1>Error 404: Página no encontrada</h1>
    <p>Lo sentimos, pero la página que estás buscando no existe.</p>`;
    return viewEl;
}