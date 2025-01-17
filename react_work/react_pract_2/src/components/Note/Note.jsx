import { useState } from 'react';
import styles from './NoteList.module.css'
export default function NoteList({text, removeNote}) {
    const [status, setStatus] = useState('not ready')

    const handleChange = () => {
        setStatus(prevStatus => prevStatus === 'not ready' ? 'ready' : 'not ready')
    }
    return (
        <li className={styles.note}>
            <p className={status === 'ready' ? styles.pDone : styles.p}>
                {status === 'ready' ? 'Ready' : {text}</p>
            <input className={styles.check} type="checkbox" onChange={handleChange} />
            <button onClick={removeNote}>delete</button>
        </li>
    )
}