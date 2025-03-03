import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

export default function CatImage() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      if (response.data.length > 0) {
        setImageUrl(response.data[0].url);
      }
    } catch (error) {
      console.error('Ошибка при загрузке картинки:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайное изображение кошки</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <img src={imageUrl} alt="Случайная кошка" className={styles.image} />
      )}
      <button onClick={fetchCatImage} className={styles.button}>
        Новая картинка
      </button>
    </div>
  );
}
