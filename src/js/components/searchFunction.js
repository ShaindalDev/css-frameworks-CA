export const mainURL = "https://nf-api.onrender.com/api/v1";
export const postsURL = "/social/posts/";
export const token = localStorage.getItem("_token");

let searchPostArr = []

const fetchsearchInput = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(searchResult => {
        searchResult.forEach()
    })
}