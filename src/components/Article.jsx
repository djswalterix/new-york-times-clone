import React from "react";
import style from "../css/Article.module.scss"; // Importa il file SCSS

function Article(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={style.articleLink}
    >
      <article className={style.article} onClick={props.onClick}>
        <div className={style.colonna}>
          <h1 className={style.headingArticle}>{props.title}</h1>
          <p className={style.bodyArticle}>{props.bodyArticle}</p>
          <p className={style.minRead}>{props.timeRead} MIN READ</p>
        </div>
        {props.img && (
          <div className={style.colonnaImg}>
            <figure className={style.articleFigure}>
              <picture className={style.articleImg} alt="article img">
                <source
                  srcset={props.imgDesktop}
                  media="(min-width: 800px)"
                ></source>
                <img src={props.img} alt="immagine articolo" />
              </picture>
              <figcaption className={style.captionImgArticle}>
                {props.by}
              </figcaption>
            </figure>
          </div>
        )}
      </article>
      <hr className={style.divisor}></hr>
    </a>
  );
}

export default Article;
