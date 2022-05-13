import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import NoteList from "./Components/NoteList/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  // states for searching text and toggle mode
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  // adding a new note

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  // deleting note
  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchNote} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote)
          )}
          handleAddNote={addNote}
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;
