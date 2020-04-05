import React, { useEffect, useReducer } from "react";
import NodeList from "./NodeList";
import AddNote from "./AddNote";
import { notesReducer } from "./NoteReducer";
import NotestContext from "./context/reacts-context";

const NoteApp = () => {
  const initNotesList = JSON.parse(localStorage.getItem("notes"));
  const [notes, dispatch] = useReducer(notesReducer, initNotesList || []);

  useEffect(() => {
    console.log("This will run only onces");
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      dispatch({ type: "POPULATE_NOTES", notesData });
    }
  }, []);

  useEffect(() => {
    console.log("notes is updated");
    console.log(JSON.stringify(notes));
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotestContext.Provider value={{ notes, dispatch }}>
      <h1>Notes App</h1>
      <AddNote />
      {/* <NodeList notes={notes} removeNote={removeNote} /> */}
      <NodeList />
    </NotestContext.Provider>
  );
};

export default NoteApp;
