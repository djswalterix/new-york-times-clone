import React from "react";
import style from "../css/Article.module.scss"; // Importa il file SCSS

function Article(props) {
  return (
    <article className={style.article} onClick={props.onClick}>
      <h1>{props.title}</h1>
      <p>{props.bodyArticle}</p>
    </article>
  );
}

export default Article;
