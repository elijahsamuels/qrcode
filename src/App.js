import QRCode from "./QRCode";
import "./App.css";

let urlString = 'http://www.jordansamuelsmusic.com'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {QRCode()}

      </header>
    </div>
  );
}

export default App;
