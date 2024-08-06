import React from 'react';
import ReactDOM from 'react-dom';

// React.createElement => React Element(Object) => html Element (render)
const root = ReactDOM.createRoot(document.getElementById('root'));
const header = React.createElement('h1',{id: 'header'},'Great to see you!');

console.log(header);

//JSX is not html in JS
//JSX is HTML-like Syntax
//JSX => transpiled before rendering => PARCEL -> Babel
//JSX => Babel transpile it to React.createElement => React Element(Object) => html Element (render)
const jsxHeader = <h1 className='header' tabIndex={1}>Namaste React using JSX 🚀</h1>

console.log(jsxHeader);
root.render(jsxHeader);