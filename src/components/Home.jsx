import React, { useState, useEffect } from "react";
import styles from "../css/Header.module.scss"; // Importa il file SCSS
import Header from "./Header";
import exportArticles from "../data/NYTGet";
import Article from "./Article";
function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesData = await exportArticles();
        setArticles(articlesData);
      } catch (error) {
        // Gestisci eventuali errori qui
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {articles.map((article, index) => (
        <Article
          key={index} // Assicurati di fornire una chiave unica per ogni articolo
          title={article.title}
          bodyArticle={article.bodyArticle}
          url={article.url}
          img={article.img}
          imgDesktop={article.imgDesktop}
          timeRead={article.timeRead}
          by={article.by}
        />
      ))}
    </div>
  );
}

export default Home;
