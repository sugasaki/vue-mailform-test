import axios from "axios";
//import URLSearchParams from "@ungap/url-search-params";
//import "url-search-params-polyfill";
//require("url-search-params");
//const API_ROOT = "https://api.github.com/";
const API_ROOT = "https://jsonplaceholder.typicode.com/";

// Fetches an API response
function callGetApi(endpoint) {
  console.log("api - callApi - ndpoint", endpoint);

  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  console.log("callGetApi", fullUrl);

  return axios
    .get(fullUrl)
    .then(res => {
      const result = res;
      return { result }; //返して代入する変数名と合わせる
    })
    .catch(err => {
      return { err };
    });
}

// Fetches an API response
function callPostApi(endpoint, data) {
  console.log("callPostApi axios data:", data);

  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  /*
  //let a = { searchStrings: data, orderBy: "" };
  const params = new URLSearchParams(); //url-search-params
  params.append("searchStrings", data);
  params.append("orderBy", "");
  console.log("axios params", params);
*/

  return axios
    .post(fullUrl, data)
    .then(response => {
      const result = response;
      console.log("axios response=", response);
      return { result }; //返して代入する変数名と合わせる
    })
    .catch(err => {
      console.log("axios err", err);
      return { err };
    });
}

export const fetchPosts = data => callPostApi(`posts/`, data);
