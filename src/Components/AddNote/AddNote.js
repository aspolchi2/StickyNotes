import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 300;
  const handleChange =(event)=>{
    
     if(charLimit - event.target.value.length>=0){
         setNoteText(event.target.value)
     }
    
     }
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type here..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <p>
          <span>{charLimit - noteText.length}</span> Remaining
        </p>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
