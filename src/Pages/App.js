const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
  res.send('This has CORS enabled 🎈')
})
app.listen(8080, () => {
  console.log('listening on port 8080')
})

import { useEffect, useState } from 'react';
function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/', { mode: 'cors' });
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <h1>React Cors Guide</h1>
    </div>
  );
}

export default App;


////////////////////////////////////////////////////////////////////////

// import logo from './logo.svg';
// import './App.css';

// function App() {
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
//       </header>
//     </div>
//   );
// }

// export default App;
