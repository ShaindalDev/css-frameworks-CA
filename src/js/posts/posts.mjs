
import { API_SOCIAL_URL } from "../api/constants.mjs";
export const token = localStorage.getItem("_token");

export const postContainer = document.querySelector(".postWrapper");
/**
 * This will get all posts from the API that is used in this project
 * it uses a forEach loop to loop trough the DB and display you all posts created on the DB
 * @param {string} token This is the authentication token stored from the API
 * 
 */
export async function getAllPosts() {
  const authOptions = {
    headers: {
      "Content-type": `application/json; charset=UTF-8`,
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${API_SOCIAL_URL}/posts?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true&limit=100&offset=1`,
    authOptions
  );
  const data = await response.json();
  console.log(data);
  postContainer.innerHTML = "";
  data.forEach(function (data) {
    postContainer.innerHTML += `<div class="postContainer col-md-6"><div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow p-2 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">${data.author.name}</strong>
          <h3 class="mb-0">${data.title}</h3>
          <div class="mb-1 text-dark">Created:${data.created}</div>
          <p class="card-text mb-auto">${data.body}</p>
          <div class="media">
          <img class="mb-3 mw-100" role="img" src="${data.media}">
          </div>
          <div class="mb-1 text-dark">Tags: ${data.tags}</div>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src="${data.author.avatar}" class="bd-placeholder-img" width="150" height="150" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false">
        </div>
        <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button> <i class="bi bi-chevron-down"></i>
         <a href="#" class="text-dtext btn btn-secondary-soft-hover py-1 px-2"  data-bs-toggle="dropdown">
         </a>
         <ul class="dropdown-menu dropdown-menu-end">
         
           <li><i class="fa-solid fa-pen"></i><a class="dropdown-item text-dtext underline-hover" data-bs-toggle="offcanvas" href="#offcanvasPost" role="button" aria-controls="offcanvas">Update Post</a></li>
           <i class="fa-solid fa-trash-can">
           <li><a class="underlineHover dropdown-item text-dtext" id="deletePost" href="#">Delete Post  </a></li></i>
           
         </ul>
       </div>
        <ul class="nav nav-stack py-3 small">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Likes: ${data._count.reactions}<i class="fa-solid fa-heart"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Comments ${data._count.comments}</a>
                </li>
              </ul>
        <div class="d-flex mb-3">
                <div class="post post-xs me-2">
                  <a href="#"> <img class="post-img rounded-circle" src="${data.owner}" alt=""> </a>
                </div>
                <form class="w-100">
                  <textarea class="form-control pe-4 bg-dim" rows="1" placeholder="Add a comment...">${data.comments}</textarea>
                </form>
              </div>
              
              <ul class="comment-wrap list-unstyled">
                <li class="comment-item">
                  <div class="d-flex position-relative">
                    <div class="post post-xs">
                      <a href="#"><img class="post-img rounded-circle" src="#" alt=""></a>
                    </div>
                    <div class="ms-2">
                      <div class="bg-dark p-3 rounded">
                        <div class="d-flex justify-content-between">
                          <h6 class="mb-1"> <a href="#"> </a></h6>
                          <small class="ms-2">10hr</small>
                        </div>
                        <p class="small mb-0"></p>
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
  });

  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }

  console.log(postContainer);
}



// deletePostButton.addEventListener("click", (e) => {
//   deletePost
// })
// export function deletePost() {
//   const deletePosts = {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }
//     };
    
//      fetch(`${mainURL}/social/posts/`, deletePosts)
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }

//get post by ID

//Update a post

//delete a post from feed

//filter posts

//search the post feed
