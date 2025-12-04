import react, { useState } from "react";
function HexPicker() {
  const [hex, setHex] = useState("#000000");

  function updateHex(e) {
    const errorMsg = document.getElementById("errorMsg");
    const previewHex = document.getElementById("previewHex");
    const value = e.target.value;
    setHex(value);

    previewHex.style.backgroundColor = value;
  }

  return (
    <div className="picker">
      <h3>Hex Color Picker</h3>
      <div className="preview" id="previewHex"></div>
      <div className="hex-input">
        <label>
          Hex
          <input
            type="text"
            id="hex"
            value={hex}
            onChange={updateHex}
            placeholder="#112233FF"
          />
        </label>
      </div>
    </div>
  );
}

export default HexPicker;
