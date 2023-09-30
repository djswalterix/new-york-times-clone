import React, { useState, useEffect } from "react";
import styles from "../css/Header.module.scss"; // Importa il file SCSS
import Header from "./Header";
import exportArticles from "../data/NYTGet";
import Article from "./Article";
import MenuPage from "./MenuPage";
import { connect, useDispatch } from "react-redux";
import { addToCache } from "../redux/actions/actions";
function Home({ query, apiCache }) {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesData = await exportArticles(query);
        setArticles(articlesData);
      } catch (error) {
        // Gestisci eventuali errori qui
        console.error(error);
      }
    };

    fetchData();
  }, [query]);*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (apiCache && apiCache[query]) {
          setArticles(apiCache[query]);
        } else {
          // Effettua una nuova chiamata API se i dati non sono in cache
          const articlesData = await exportArticles(query);
          setArticles(articlesData);

          // Aggiungi i dati alla cache utilizzando l'azione Redux
          dispatch(addToCache(query, articlesData));
          console.log("apiCache:", apiCache);
        }
      } catch (error) {
        // Gestisci eventuali errori qui
        alert(error);
      }
    };

    fetchData();
  }, [query, apiCache, dispatch]);
  //alert(query);
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
const mapStateToProps = (state) => ({
  query: state.query,
  apiCache: state.apiCache,
});

export default connect(mapStateToProps)(Home);
