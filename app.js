import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => React Element(Object) => html Element (render)
const root = ReactDOM.createRoot(document.getElementById('root'));
// const header = React.createElement('h1',{id: 'header'},'Great to see you!');

//JSX is not html in JS
//JSX is HTML-like Syntax
//JSX => transpiled before rendering => PARCEL -> Babel
//JSX => Babel transpile it to React.createElement => React Element(Object) => html Element (render)
// const jsxHeader = <h1 className='header' tabIndex={1}>Namaste React using JSX 🚀</h1>
const content = (<div id="main-container">
    <h1 id="heading">
        I am Babel 
      </h1>
    <p>
      My Role is to transforms JSX into regular JavaScript function calls that create React elements
    </p>
    <p>
    I (Babel) transpiles JSX to React.createElement- React Element(Object) -- html Element (render)
    </p>
  </div>)

console.log(content);
root.render(content);