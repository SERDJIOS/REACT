import { useState } from "react";

export default function Answer({ updatePoints }) {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePoints(answer);  
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Введите ответ"
            />
            <button type="submit">Проверить</button>
        </form>
    )
}