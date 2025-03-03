import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error('Ошибка при загрузке статьи:', error));
  }, [id]);

  if (!article) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}
