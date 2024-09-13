export function Chat(props)
{
    const viewEl = document.createElement('div');
    viewEl.textContent = `This is the CHAT page ${props.name}`;
    if(props.id)
    {
        const idEl=document.createElement(`p`);
        idEl.textContent="Tu ID es:${props.id}";
        viewEl.appendChild(idEl);
    }
    console.log(props);

    return viewEl;
}