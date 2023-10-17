
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dev_to_articles.css';

 const DevToArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://dev.to/api/articles?username=fersoria001'); // Replace with your DEV.to username
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="DevToArticles">
      <h2>My Dev.to Articles </h2>
      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DevToArticles;
