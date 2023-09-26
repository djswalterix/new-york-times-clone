import get from "./get.js";
import debug from "./debug.json";
const key = "CTUUG10nmQPjoe2U36TAOahrIql4joJ2";

async function getGeneric() {
  //const url = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=";
  const url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";

  try {
    const data = await get(url + key);
    console.log(url + key);
    //console.log(data.docs);
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    //contorllo errori
    if (error.response && error.response.status === 404) {
      throw error;
    } else {
      throw error;
    }
  }
}

async function getGenericDebug() {
  try {
    const data = debug; //debug e il json
    const docs = data.response.docs; //questo e un array
    /*
    const keys = [];

    for (const key in docs[0]) {
      keys.push(key);
    }

    // Ora puoi accedere all'array "keys" che contiene tutti i nomi delle chiavi nell'oggetto JSON
    console.log(keys);
    */
    //console.log(data.docs);
    console.log(JSON.stringify(docs[0].headline.main));
    return data;
  } catch (error) {
    //contorllo errori
    if (error.response && error.response.status === 404) {
      throw error;
    } else {
      throw error;
    }
  }
}

async function exportArticles() {
  const data = await getGenericDebug();
  const articles = data.response.docs;
  let articlesFormatted = [];

  for (const article of articles) {
    // Per ogni articolo, crea un oggetto con le proprietà "title" e "bodyArticle"
    const formattedArticle = {
      title: article.headline.main,
      bodyArticle: article.abstract,
    };
    console.log(JSON.stringify(formattedArticle));
    articlesFormatted.push(formattedArticle);
  }
  return articlesFormatted;
}

export default exportArticles;
