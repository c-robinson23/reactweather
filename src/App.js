import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello React World</h2>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
