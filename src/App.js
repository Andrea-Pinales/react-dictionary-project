import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            Your <em>reliable</em>
            <br />
            dictionary
          </h1>
          <h2>What do you want to look up today?</h2>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Andrea Pinales</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
