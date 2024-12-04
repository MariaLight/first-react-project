import logo from './logo.svg';
import { createElement } from 'react';
import './App.css';

// function App() {
//   const currentYear = new Date().getFullYear();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>{currentYear}</p>
//       </header>
//     </div>
//   );
// }

function App() {
  const currentYear = new Date().getFullYear();
  return createElement('div', { className: 'App' },
    createElement('header', { className: 'App-header' },
      createElement('img', { className: 'App-logo', alt: 'logo', src: logo }),
      createElement('p', {},
        'Edit ',
        createElement('code', {}, 'src/App.js'),
        ' and save to reload.'),
      createElement('a', { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' }, 'Learn React'),
      createElement('p', {}, currentYear),
    )
  )
}

export default App;

// Всё декларативный стиль 
