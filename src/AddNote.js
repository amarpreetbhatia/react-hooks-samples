import React, { useState, useContext } from "react";
import NotesContext from "./context/reacts-context";

const AddNote = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onAddNotes = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTES", title, body });
    setTitle("");
    setBody("");
  };
  return (
    <React.Fragment>
      <p>Add Note</p>
      <form onSubmit={onAddNotes}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button type="submit">Add Note</button>
      </form>
    </React.Fragment>
  );
};

export { AddNote as default };
