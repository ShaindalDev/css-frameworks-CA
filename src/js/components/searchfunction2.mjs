import { API_SOCIAL_URL } from "../api/constants.mjs";

const allPosts = API_SOCIAL_URL;

let filteredPostData = allPosts

const searchInput = document.getElementById('searchbar');
const resultFeed = document.getElementById('searchResultFeed');

const generatePostCard = (data) => {
    return `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow p-2 h-md-250 position-relative">

    <div class="d-flex justify-content-between">

      <a href="../pages/post.html?id=${data.id}" class="btn btn-primary">View Post</a>

    </div>

    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">${data.author.name}</strong>
      <h3 class="mb-0">${data.title}</h3>
      <div class="mb-1 text-dark">Created: ${data.created}</div>
      <p class="card-text mb-auto">${data.body}</p>
      <div class="media">
        <img class="mb-3 mw-100" role="img" src="${data.media}">
      </div>
      <div class="mb-1 text-dark">Tags: ${data.tags} </div>
    </div>

    <ul class="nav nav-stack py-3 small">
      <li class="nav-item">
        <a class="nav-link active" href="#">Likes: ${data._count.reactions} <i class="fa-solid fa-heart"></i> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Comments ${data._count.comments}</a>
      </li>
    </ul>
    <div class="d-flex mb-3">
      <div class="post post-xs me-2">
        <a href="#"> <img class="post-img rounded-circle" src="${data.owner}" alt=""> </a>
      </div>
  </div>`
}

const getResultFeed = (data) => {
    return data.map(data => generatePostCard(data))
}

resultFeed.innerHTML = getResultFeed(filteredPostData)

searchInput.addEventListener('input', (event) => {
    console.log("user typed:", event.target.value)
    filteredPostData = data.data.filter(data => data.title.toLowerCase().include(event.target.value.toLowerCase()))
    resultFeed.innerHTML = getResultFeed(filteredPostData)
});