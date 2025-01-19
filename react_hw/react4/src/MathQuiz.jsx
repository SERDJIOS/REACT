import { useState } from "react";
import Answer from "./App2";

export default function MathQuiz () {
    const [a, setA] = useState(number());
    const [b, setB] = useState(number());
    const [win, setWin] = useState(0);

    function number () {
        return Math.floor(Math.random() * 10) +1;
    }

    const updatePoints = (userAnswer) => {
        const correct = a + b;
        if (parseInt(userAnswer) === correct) {
          setWin(win + 1); 
        } else {
          setWin(win - 1); 
        }
        setA(number());
        setB(number());
      };
    return (
        <div className="MathQuiz">
            <h1>Ваш счет: {win} </h1>
            <h2> {a} + {b} = ?</h2>
            <Answer updatePoints = {updatePoints} />
        </div>
    )
}