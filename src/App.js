import React from "react";
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Dictionary defaultKeyword="beach"/>
      </main>
      <footer className="App-footer">
        Coded by Amanda Corral
      </footer>
    </div>
    </div>
  );
}

export default App;
