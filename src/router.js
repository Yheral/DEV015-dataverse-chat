import {Chat} from "./views/Chat.js";

let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl=el;
}

//La función setRoutes(routes) coloca todas las (vistas) en el mapa:
export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
ROUTES=routes;
}

export const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const params=new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const obj={};
  params.forEach((value,key)=>
  {
    obj[key]=value;
  });

  // return the object
  return obj 
}
 
export const renderView = (pathname, props={}) => {
  // clear the root element
  if(rootEl) {
    rootEl.innerHTML=``;
  }
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  const View = ROUTES[pathname] || ErrorView;
  // render the correct view passing the value of props
  const viewElement = View(props)
  // add the view element to the DOM root element
  rootEl.appendChild(viewElement);
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // render the view with the pathname and props
  renderView(pathname,props);
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const pathname=location.pathname;
  const params=new URLSearchParams(location.search);
  // convert the search params to an object
  const obj={};
  params.forEach((value,key)=>
  {
    obj[key]=value;
  });
  // render the view with the pathname and object
  renderView(pathname,obj)
}