import { authFetch } from "../api/authFetch.mjs";

const detailContainer = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://nf-api.onrender.com/api/v1/social/posts/" + id;


/**
 * This shows a single post through using fetch with an PostID from the API When button View Post is clicked 
 */
export async function getDetails() {
  if (!id) {
    throw new Error("Failed to fetch the post due to missing PostID");
  }
  const singlePostURL = `${url}`;

  const response = await authFetch(singlePostURL);

  const details = await response.json();

  console.log(details);
  document.title = details.title;
  createHtml(details);
  if (createHtml) {
  
  }

  // Iterate over delete buttons.
  document.querySelectorAll('.deleteBtn').forEach(item => {
    item.addEventListener('click', event => {
      destroyPost(item.dataset.id);
    })
  })

  // // Iterate over edit buttons.
  document.querySelectorAll('.editPostBtn').forEach(item => {
    item.addEventListener('click', event => {
      editPost(item.dataset.id);
    })
  })
    ;

/**
 * Delete post functions.
 */

async function destroyPost(id) {

  const response = await authFetch(API_SOCIAL_URL + "/posts/" + id, {
    method: 'DELETE',
    cache: 'no-cache',
  });

  return response.json();
}


/**
 * This is the Edit Post function with eventListener. This is run with the updatePost function below
 * @param {*} id 
 */


async function editPost(id) {
  const response = await fetch(`${API_SOCIAL_URL}/posts/` + id,
    authOptions
  );

  const post = await response.json();
  document.getElementById("id").value = post.id;
  document.getElementById("title").value = post.title;
  document.getElementById("body").value = post.body;
  document.getElementById("tags").value = post.tags;
  document.getElementById("media").value = post.media;

  }
  
  const updatePostBtn = document.getElementById("updatePostBtn");

updatePostBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log("this was clicked");
  const postId = document.getElementById("id").value;
  updatePost(postId);
})

async function updatePost(id) {

  const form = document.getElementById('updatePostForm');
  const formData = new FormData(form);
  const post = Object.formEntries(formData.entries())
  const response = await fetch(API_SOCIAL_URL + "/posts/" + id, {
    method: 'PUT',
    cache: 'no-cache',
    body: JSON.stringify(post)
  });

  return response.json();
  
}

console.log(detailContainer);
}
getDetails();

/**
 * This creates/renders the HTML for the single post that is displayed 
 * @param {*} details 
 */
function createHtml(details) {
  detailContainer.innerHTML += `<div class="card border-0 userPostCard">
  <div class="card-header border-0 pb-0 bg-lighter">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <div class="post post-story ">
          <a href="#"> <img class="content-img postImg rounded-circle" src="" alt=""> </a>
        </div>
        <div>
          <div class="nav">
            <h6 class="nav-item card-title mb-0"> <a href="#">${details.author}</a></h6>
          </div>
          <p class="mb-0 small">${details.title}</p>
        </div>
        <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button> <i class="bi bi-chevron-down"></i>
         <a href="#" class="text-dtext btn btn-secondary-soft-hover py-1 px-2"  data-bs-toggle="dropdown">
         </a>
         <ul class="dropdown-menu dropdown-menu-end">
           <li><a class="dropdown-item text-dtext deleteBtn" href="#" data-id="${details.id}">Delete Post ${details.id}</a></li>
           <li><a href="#"class="dropdown-item text-dtext btn editPostBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasPost" aria-controls="offcanvas" data-id="${details.id}">Update Post </a></li>
         </ul>
       </div>
      </div>
    </div>
  </div>
  <div class="card-body">
    <p>${details.body}</p>
    <img class="card-img" src="${details.media}" alt="Post">
    <ul class="nav nav-stack py-3 small">
      <li class="nav-item">
        <a class="nav-link active" href="#">Liked ${details._count.reactions}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Comments ${details._count.comments}</a>
      </li>
    </ul>
    <div class="d-flex mb-3">
      <div class="post post-xs me-2">
        <a href="#"> <img class="post-img rounded-circle" src="https:xsgames.co/randomusers/avatar.php?g=male" alt=""> </a>
      </div>
      <form class="w-100">
        <textarea  class="form-control pe-4 bg-dim" rows="1" placeholder="Add a comment..."></textarea>
      </form>
    </div>
    <ul class="comment-wrap list-unstyled">
      <li class="comment-item">
        <div class="d-flex position-relative">
          <div class="post post-xs">
            <a href="#"><img class="post-img rounded-circle" src="https:xsgames.co/randomusers/avatar.php?g=female" alt=""></a>
          </div>
          <div class="ms-2">
            <div class="bg-dark p-3 rounded">
              <div class="d-flex justify-content-between">
                <h6 class="mb-1"> <a href="#">${details.comments} </a></h6>
                <small class="ms-2">10hr</small>
              </div>
              <p class="small mb-0">${details.comments}</p>
            </div>
            <ul class="nav py-2 small">
              <li class="nav-item">
                <a class="nav-link" href="#"> Like (6)</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> Reply</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> View 12 replies</a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="comment-item list-unstyled">
          <li class="comment-item">
            <div class="d-flex">
              <div class="post post-xs">
                <a href="#"><img class="post-img rounded-circle" src="https:xsgames.co/randomusers/avatar.php?g=female" alt=""></a>
              </div>
              <div class="ms-2">
                <div class="bg-dark p-3 rounded">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-1"> <a href="#"> Natasha Romanov </a> </h6>
                    <small class="ms-2">5hr</small>
                  </div>
                  <p class="small mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti?</p>
                </div>
                <ul class="nav py-2 small">
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Like ${details._count.reactions}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Reply</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="comment-item">
            <div class="d-flex">
              <div class="post post-story post-xs">
                <a href="#"><img class="post-img rounded-circle" src="${details.avatar}" alt=""></a>
              </div>
              <div class="ms-2">
                <div class="bg-dark p-3 rounded">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-1"> <a href="#"> Loki Odinsson </a> </h6>
                    <small class="ms-2">25min</small>
                  </div>
                  <p class="small mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos.</p>
                </div>
                <ul class="nav  py-2 small">
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Like (39)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Reply</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <a href="#" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
          <div class="dotsdots me-2">
            <span class="dotDot"></span>
            <span class="dotDot"></span>
            <span class="dotDot"></span>
          </div>
          Load more replies
        </a>
      </li>
    </ul>
  </div>
</div>`;

}
