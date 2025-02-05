import React, { useState } from "react";
import style from "./ToggleText.module.css";

export default function ToggleText() {
  const [show, setShow] = useState(true);
  const [duration, setDuration] = useState(500);

  function toggleText() {
    setShow(!show);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <div className={style.container}>
      <h1>Скрытие и отображение текста</h1>
      <button onClick={toggleText}>
        {show ? "Скрыть текст" : "Показать текст"}
      </button>
      <input
        type="number"
        value={duration}
        onChange={handleDurationChange}
        placeholder="Длительность (мс)"
      />
      <p
        className={style.text}
        style={{ transition: `opacity ${duration}ms`, opacity: show ? 1 : 0 }}
      >
        {show ? "Скрываемый текст" : ""}
      </p>
    </div>
  );
}
