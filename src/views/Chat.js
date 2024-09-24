export function Chat(props)

{
    const viewEl = document.createElement('div');
    viewEl.textContent = `Conversa y conoce más de ${props.name}`;    
    return viewEl;
}