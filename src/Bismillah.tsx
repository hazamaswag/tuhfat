import React from "react";
import "./Bismillah.css";

export default function Bismillah() {
  const bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ";
  const [text, setText] = React.useState(bismillah);
  const [interpretationBut, setInterpretationBut] = React.useState(
    "Hamza's Interpretation"
  );
  return (
    <>
      <div className="test">
        <button
          className="btn_trans"
          type="button"
          onClick={() => {
            if (text === bismillah) {
              setText("In the Name of Allah, The Merciful and Compassionate");
              setInterpretationBut("Arabic");
            } else {
              setText(bismillah);
              setInterpretationBut("Hamza's Interpretation");
            }
          }}
        >
          {interpretationBut}
        </button>
      </div>
      <h1 className="bismillah">{text}</h1>
    </>
  );
}
