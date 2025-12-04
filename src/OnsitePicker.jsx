import React, { useState } from "react";

function OnsitePicker() {
  const [color, setColor] = useState("");

  function updateColor(e) {
    const value = e.target.value;
    setColor(value);

    const preview = document.getElementById("preview3");
    preview.style.backgroundColor = value;
  }

  return (
    <div className="picker">
      <h3> Color Picker</h3>
      <div className="preview" id="preview3"></div>

      <label>
        Choose a color:
        <input type="color" value={color} onChange={(e) => updateColor(e)} />
      </label>
    </div>
  );
}

export default OnsitePicker;
