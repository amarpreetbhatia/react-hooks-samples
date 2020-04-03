import React, { useEffect } from "react";

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("Note item run onces");

    return () => {
      console.log("cleaning up component");
    };
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <h3 style={{ marginLeft: "0.5rem" }}>{note.title}</h3>
      <h4 style={{ marginLeft: "0.5rem" }}>{note.body}</h4>
      <button
        style={{ margin: "0.5rem", backgroundColor: "grey" }}
        onClick={() => removeNote(note.title)}
      >
        x
      </button>
    </div>
  );
};

export { Note as default };
