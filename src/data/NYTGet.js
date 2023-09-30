import get from "./get.js";
import debug from "./debug.json";
const key = "CTUUG10nmQPjoe2U36TAOahrIql4joJ2";

async function getGeneric(query = "") {
  //const url = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=";
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=`;

  try {
    const data = await get(url + key);
    console.log(url + key);
    //console.log(data.docs);
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Errore generico:", error);

    if (error.response) {
      if (error.response.status === 404) {
        // Errore 404: Risorsa non trovata
        console.error("Errore 404: Risorsa non trovata");
        window.alert("Errore 404: Risorsa non trovata");
        throw new Error("Risorsa non trovata");
      } else if (error.response.status === 401) {
        // Errore 401: Non autorizzato
        console.error("Errore 401: Non autorizzato");
        window.alert("Errore 401: Non autorizzato");
        throw new Error("Non autorizzato");
      } else {
        // Altro errore HTTP
        console.error("Errore HTTP:", error.response.status);
        window.alert(`Errore HTTP: ${error.response.status}`);
        throw error;
      }
    } else {
      // Errore generico non legato a una risposta HTTP
      console.error(
        "Errore generico non legato a una risposta HTTP:",
        error.message
      );
      window.alert(`Errore generico: ${error.message}`);
      throw error;
    }
  }
}

async function getGenericDebug() {
  try {
    const data = debug; //debug e il json
    const docs = data.response.docs; //questo e un array

    const keys = [];

    for (const key in docs[0].byline) {
      keys.push(key[0]);
    }

    // Ora puoi accedere all'array "keys" che contiene tutti i nomi delle chiavi nell'oggetto JSON
    console.log(keys);

    //console.log(data.docs);
    //console.log(JSON.stringify(docs[0].headline.main));
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

async function exportArticles(query = "") {
  // alert(query);
  const data = await getGeneric(query);
  const articles = data.response.docs;
  let articlesFormatted = [];

  for (const article of articles) {
    // Per ogni articolo, crea un oggetto con le proprietà "title" e "bodyArticle"
    //word_count numero di parole
    const formattedArticle = {
      title: article.headline.main,
      bodyArticle: article.abstract,
      timeRead: fromWordsToTime(article.word_count),
      url: article.web_url,
      by: article.byline?.original || null,
      //img: "https://static01.nyt.com/" + article.multimedia[0].url,
    };

    //aggiungo img formato corretto

    for (const item of article.multimedia) {
      if (item.subtype === "square320") {
        formattedArticle.img = "https://static01.nyt.com/" + item.url;
      }
      // Aggiungi img formato "xlarge"
      if (item.subtype === "xlarge") {
        formattedArticle.imgDesktop = "https://static01.nyt.com/" + item.url;
      }
    }

    //console.log(JSON.stringify(formattedArticle));
    articlesFormatted.push(formattedArticle);
  }
  return articlesFormatted;
}
/*trasform numero parole in minuti di lettura 
10 parole 2,5 secondi
*/
function fromWordsToTime(numerOfWords) {
  return Math.round(((numerOfWords / 10) * 2.5) / 60);
}
export default exportArticles;
