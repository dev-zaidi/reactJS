import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <h1> React(JS library for UI)</h1>
    <h1>Angular(JS Framework)</h1>
    <h6>notes</h6>
    <ul>
  <li>Real DOM renders in the browser.</li>
  <li>Virtual DOM is React's main feature.</li>
  <li>Before engaging with the Real DOM, it engages with the Virtual DOM to prevent crashes during production.</li>
  <li>
    Process:
    <ul>
      <li>Code → Virtual DOM (analysis and updates) → Real DOM.</li>
    </ul>
  </li>
  <li>The Virtual DOM is saved in the browser's memory; it doesn't just disappear.</li>
  <li>Directly using `document.` methods interacts with the Real DOM, not the Virtual DOM.</li>
  <li>React works in a component-based structure.</li>
  <li>Function components vs Class components (class components are deprecated).</li>
  <li>
    Boilerplate Options:
    <ul>
      <li>
        <h5>Create-React-App (CRA):</h5>
        <ul>
          <li>Deprecated due to longer render times, complex structure, and unsatisfactory developer experience.</li>
        </ul>
      </li>
      <li>
       <h5>Vite:</h5>
        <ul>
          <li>Easy to use.</li>
          <li>Lightweight folder structure.</li>
          <li>Renders quickly.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Commands for setting up Vite:</li>
  <li>npm create vite</li>
  <li>Select a name for the folder.</li>
  <li>Select your library (React, etc.).</li>
  <li>Select your preferred language (JavaScript or TypeScript).</li>
  <li>Install missing node modules in the boilerplate folder using <code>npm install</code>.</li>
  <li>Run the application using <code>npm run dev</code>.</li>
  <li>Instead of CDN links, add dependencies using commands:</li>
  <li>Install Bootstrap: <code>npm install bootstrap</code>.</li>
  <li>Install Font Awesome: <code>npm install fontawesome</code>.</li>
  <li>Simply adding the keys in dependencies won't work—you need to install and link them properly.</li>
</ul>

    </div>
);

