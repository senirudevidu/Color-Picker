import "./App.css";
import Picker from "./Picker.jsx";
import HexPicker from "./HexPicker.jsx";
import OnsitePicker from "./OnsitePicker.jsx";

function App() {
  return (
    <>
      <h1>Color Pickers</h1>
      <div className="App">
        <Picker />
        <HexPicker />
        <OnsitePicker />
      </div>
    </>
  );
}

export default App;
