import React from "react";
import './App.css';
import Dictionary from "./Dictionary";
import axios from "axios";

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by Amanda Corral
      </footer>
    </div>
    </div>
  );
}

export default App;
