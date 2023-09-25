import get from "./get.js";

const key = "CTUUG10nmQPjoe2U36TAOahrIql4joJ2";

export default async function getGeneric() {
  //const url = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=";
  const url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=";

  try {
    const data = await get(url + key);
    console.log(url + key);
    //console.log(data.docs);
    console.log(JSON.stringify(data).docs);
    return data.docs;
  } catch (error) {
    //contorllo errori
    if (error.response && error.response.status === 404) {
      throw error;
    } else {
      throw error;
    }
  }
}
