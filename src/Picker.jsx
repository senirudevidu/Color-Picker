import Ract, { useState } from "react";

function Picker() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  let myColors = [r, g, b];

  function valueCheck(value) {
    if (value < 0) {
      return 0;
    } else if (value > 255) {
      return 255;
    } else {
      return value;
    }
  }

  function updateColor(e) {
    const colorComponent = e.target.id;
    const value = valueCheck(e.target.value);

    const r = document.getElementById("r");
    const g = document.getElementById("g");
    const b = document.getElementById("b");

    if (colorComponent === "r") {
      setR(value);
      r.style.accentColor = "rgb(" + value + ", " + 0 + ", " + 0 + ")";
    } else if (colorComponent === "g") {
      setG(value);
      g.style.accentColor = "rgb(" + 0 + ", " + value + ", " + 0 + ")";
    } else if (colorComponent === "b") {
      setB(value);
      b.style.accentColor = "rgb(" + 0 + ", " + 0 + ", " + value + ")";
    }

    const preview = document.getElementById("preview");
    preview.style.backgroundColor = `rgb(${myColors[0]}, ${myColors[1]}, ${myColors[2]})`;
  }

  return (
    <div className="picker">
      <div className="preview" id="preview"></div>

      <div className="sliders">
        <label>
          Red
          <input
            type="range"
            min="0"
            max="255"
            id="r"
            value={r}
            onChange={updateColor}
          />
          <input
            type="number"
            min="0"
            max="255"
            id="r"
            placeholder="0-255"
            value={r}
            onChange={updateColor}
          />
        </label>

        <label>
          Green
          <input
            type="range"
            min="0"
            max="255"
            id="g"
            value={g}
            onChange={updateColor}
          />
          <input
            type="number"
            min="0"
            max="255"
            id="g"
            placeholder="0-255"
            value={g}
            onChange={updateColor}
          />
        </label>

        <label>
          Blue
          <input
            type="range"
            min="0"
            max="255"
            id="b"
            value={b}
            onChange={updateColor}
          />
          <input
            type="number"
            min="0"
            max="255"
            id="b"
            placeholder="0-255"
            value={b}
            onChange={updateColor}
          />
        </label>
      </div>
    </div>
  );
}
export default Picker;
