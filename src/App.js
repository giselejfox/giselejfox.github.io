import './App.css';
// Import other js files
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>This is Gisele's website!</p>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
