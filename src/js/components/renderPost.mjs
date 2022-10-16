/**
 * This renders the HTML for all posts. 
 * @param {*} postsToRender 
 */
export function renderPosts(postsToRender) {
    const postContainer = document.querySelector('#postContainer');

    postContainer.innerHTML = "";

    postsToRender.forEach((post) => {
      postContainer.innerHTML += `<div class="col-md-6">

        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow p-2 h-md-250 position-relative">

          <div class="d-flex justify-content-between">

            <a href="../pages/post.html?id=${post.id}" class="btn btn-primary">View Post</a>

          </div>

          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${post.author.name}</strong>
            <h3 class="mb-0">${post.title}</h3>
            <div class="mb-1 text-dark">Created:${post.created}</div>
            <p class="card-text mb-auto">${post.body}</p>
            <div class="media">
              <img class="mb-3 mw-100" role="img" src="${post.media}">
            </div>
            <div class="mb-1 text-dark">Tags: ${post.tags}</div>
          </div>
          <ul class="nav nav-stack py-3 small">
            <li class="nav-item">
              <a class="nav-link active" href="#">Likes: ${post._count.reactions} <i class="fa-solid fa-heart"></i> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comments ${post._count.comments}</a>
            </li>
          </ul>
          <div class="d-flex mb-3">
            <div class="post post-xs me-2">
              <a href="#"> <img class="post-img rounded-circle" src="${post.owner}" alt=""> </a>
            </div>`;
    });
    
};