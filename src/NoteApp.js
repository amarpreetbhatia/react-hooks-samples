import React, { useEffect, useReducer } from "react";
import NodeList from "./NodeList";
import AddNote from "./AddNote";
import { notesReducer } from "./NoteReducer";

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

  const removeNote = title => {
    dispatch({ type: "REMOVE_NOTES", title });
  };

  return (
    <div>
      <h1>Notes App</h1>
      <AddNote dispatch={dispatch} />
      <NodeList notes={notes} removeNote={removeNote} />
    </div>
  );
};

export default NoteApp;
