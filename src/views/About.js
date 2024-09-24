export function About(props) { 
  const viewEl = document.createElement('div');

  // Usar el nombre y la descripción de los props
  const { name, description } = props;

  viewEl.innerHTML = `Conoce más de <strong>${name}</strong>: ${description}`;
  
  return viewEl;
}
