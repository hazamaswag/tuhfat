import React, { useState } from "react";

// const english = /^[A-Za-z0-9]*$/;
// const english = /[A-Za-z0-9 _.,!"'/$]*/;
// eslint-disable-next-line
const english = /[^\u0000-\u007F]/;

const isEng = (txt: string) => {
  const phrase_list = txt.split(" ");
  const p_test = phrase_list.map((phrase) => english.test(phrase));
  return p_test.includes(false) ? true : false;
};

interface IEntry {
  id?: number;
  unvoweled_arab: string;
  voweled_arab: string;
  eng: string;
}

const Switch = ({ unvoweled_arab, voweled_arab, eng }: IEntry) => {
  const [text, setText] = useState(unvoweled_arab);
  const [interpretationBut, setInterpretationBut] = useState(
    "Hamza's Interpretation"
  );
  const [vowelBut, setVowelBut] = useState("Add Vowels");

  const lang = (txt: string) => {
    if (isEng(txt)) {
      setText(unvoweled_arab);
      setInterpretationBut("Hamza's Interpretation");
    } else {
      setText(eng);
      setInterpretationBut("Arabic");
      setVowelBut("Add Vowels");
    }
  };

  const lang2 = (txt: string) => {
    if (isEng(txt)) {
    } else if (txt === voweled_arab) {
      setText(unvoweled_arab);
      setVowelBut("Add Vowels");
    } else {
      setText(voweled_arab);
      setVowelBut("Remove Vowels");
    }
  };

  return (
    <>
      <button className="btn_trans" type="button" onClick={() => lang(text)}>
        {interpretationBut}
      </button>
      <button
        className="btn_vowel"
        disabled={isEng(text)}
        type="button"
        onClick={() => lang2(text)}
      >
        {vowelBut}
      </button>
      <h1 className="bismillah">{text}</h1>
    </>
  );
};

export default Switch;
