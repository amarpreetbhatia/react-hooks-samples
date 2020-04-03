import React from "react";
import Note from "./Note";

const NodeList = ({ notes, removeNote }) => {
  return notes.map((n, i) => <Note key={i} note={n} removeNote={removeNote} />);
};
export { NodeList as default };
