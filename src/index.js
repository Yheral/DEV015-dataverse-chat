import {Home} from './views/Home.js';
import {Chat} from './views/Chat.js';
import {About} from './views/About.js';

// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/about': About,
  '/chat': Chat,


};
// Assign the routes
setRoutes(routes);

const root = document.getElementById("root");
// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => { 
  
  setRootEl(document.getElementById("root")); // Establece el elemento raíz para el enrutador
  onURLChange(window.location); // Renderiza la vista inicial según la URL actual
});
window.addEventListener("popstate",()=>
{
  onURLChange(window.location); // Renderiza la vista inicial según la URL actual

});