import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "./context/reacts-context";

const NodeList = () => {
  const { notes } = useContext(NotesContext);
  return notes.map((n, i) => <Note key={i} note={n} />);
};
export { NodeList as default };
