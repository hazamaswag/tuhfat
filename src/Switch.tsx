import React from "react";

// const english = /^[A-Za-z0-9]*$/;
// eslint-disable-next-line
const english = /[^\u0000-\u007F]/;
// const english = /[A-Za-z0-9 _.,!"'/$]*/;

const isEng = (txt: string) => {
  const phrase_list = txt.split(" ");
  const p_test = phrase_list.map((phrase) => english.test(phrase));
  return p_test.includes(false) ? true : false;
};

interface IEntry {
  id?: number;
  eng: string;
  arab: string;
  harakat: string;
}

// Change default to without harakat, refactor code

const Switch = ({ eng, arab, harakat }: IEntry) => {
  const [text, setText] = React.useState(eng);
  const [arabBut, setArabBut] = React.useState("Arabic");
  const [harabut, setHaraBut] = React.useState("Remove harakat");

  const lang = (txt: string) => {
    if (isEng(txt)) {
      setText(harakat);
      setArabBut("English");
    } else {
      setText(eng);
      setArabBut("Arabic");
      setHaraBut("Remove harakat");
    }
  };

  const lang2 = (txt: string) => {
    if (isEng(txt)) {
    } else if (txt === harakat) {
      setText(arab);
      setHaraBut("Add harakat");
    } else {
      setText(harakat);
      setHaraBut("Remove harakat");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button type="button" onClick={() => lang(text)}>
        {arabBut}
      </button>
      <button disabled={isEng(text)} type="button" onClick={() => lang2(text)}>
        {harabut}
      </button>
    </>
  );
};

export default Switch;
