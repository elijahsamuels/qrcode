import QRCode from "./QRCode";
// import QRCode2 from "./QRCode2";
// import QRCode2 from "./QRCode2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {QRCode()}
        {/* {QRCode2()} */}
      </header>
    </div>
  );
}

export default App;
