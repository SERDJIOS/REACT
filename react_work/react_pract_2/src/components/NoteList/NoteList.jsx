import styles from './NoteList.module.css'
import { Note } from '../Note/Note'
import { useState } from 'react';
export default function NoteList() { 
    const [notes, setNotes] = useState([]);

    const addNote = note => {
        setNotes(prevNotes => [...prevNotes, note]);
    }
    const removeNote = noteToDelete => {
       setNotes(prevNotes => prevNotes.filter(n => n !== noteToDelete));
    }
    return (
        <>
            <NoteForm addNote={addNote} />
        <ul className={styles.noteList}>
          {notes.map(note => <NoteList key={note} text={note} />)}
          <Note removeNote={removeNote} />
        </ul>
        </>
    )
}
