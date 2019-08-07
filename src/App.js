import React from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
      <Main/>
      </div>
    </div>
  );
}

export default App;
