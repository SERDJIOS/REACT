import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Ошибка при загрузке статей:', error));
  }, []);

  const handleArticleClick = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div>
      <h1>Список статей</h1>
      {articles.map((article) => (
        <button
          key={article.id}
          onClick={() => handleArticleClick(article.id)}
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px 16px',
            backgroundColor: '#fff',
            color: '#008080',
            border: '1px solid #008080',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          {article.title}
        </button>
      ))}
    </div>
  );
}
