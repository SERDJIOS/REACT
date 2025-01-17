import styles from './NoteForm.module.css'
import { useState } from 'react'


export default function NoteForm({addNote}) {
    const [noteText, setNoteText] = useState('')
    const handleChange = (e) => {
        setNoteText(e.target.value);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(noteText);
        setNoteText('');
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} onChange={handleChange} value={noteText} type="text" />
            <button className={styles.button} type="submit"></button>
        </form>
    )
}