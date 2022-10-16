//importing from other JS files
import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL } from "../api/constants.mjs";

// global const used in the file

const postsURL = "/posts";
const token = localStorage.getItem("_token");
const userName = localStorage.getItem("profile");
const usersPostContainer = document.getElementById("usersPostWrapper");
const authOptions = {
  headers: {
    "Content-type": `application/json; charset=UTF-8`,
    Authorization: `Bearer ${token}`,
  },
};

/**
 * This will get all the user's post that has been created. 
 * A filter method is used to show only the user's post and not all other posts. 
 * Authentication is run here as well to check if you are logged in with a valid user email and password
 * @param {string} token This is the token that has been stored when login function was run
 */
export async function getUsersPosts() {
 
    const response = await fetch(
      `${API_SOCIAL_URL}${postsURL}/?sort=owner&sortOrder=desc&_author=true&_comments=true&_reactions=true&limit=100&offset=200`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(),
      }
    );
    const data = await response.json();
    // console.log(data);
/**
 * Filter function, to filter all the data that comes from the API, down to a single users data.
 */
      const filteredData = data.filter((filtered) => {
        return filtered.author.name == userName;
      });
      
      usersPostContainer.innerHTML = "";
      filteredData.forEach((filteredData) => {
        usersPostContainer.innerHTML += `<div class="card border-0 userPostCard">
        <div class="card-header border-0 pb-0 bg-lighter">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="post post-story ">
                <a href="#"> <img class="post-img rounded-circle" src="${filteredData.author.avatar}" alt=""> </a>
              </div>
              <div>
                <div class="nav">
                  <h6 class="nav-item card-title mb-0"> <a href="#">${filteredData.author.name}</a></h6>
                </div>
                <p class="mb-0 small">${filteredData.title}</p>
              </div>
            </div>
            <a href="../pages/post.html?id=${filteredData.id}"><button class="btn btn-link">View Details</button></a>
            <div class="dropdown">
             <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button> <i class="bi bi-chevron-down"></i>
              <a href="#" class="text-dtext btn btn-secondary-soft-hover py-1 px-2"  data-bs-toggle="dropdown">
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item text-dtext deleteBtn" href="#" data-id="${filteredData.id}">Delete Post ${filteredData.id}</a></li>
                <li><a href="#"class="dropdown-item text-dtext btn editPostBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasPost" aria-controls="offcanvas" data-id="${filteredData.id}">Update Post </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p>${filteredData.body}</p>
          <img class="card-img" src="${filteredData.media}" alt="Post">
          <ul class="nav nav-stack py-3 small">
            <li class="nav-item">
              <a class="nav-link active" href="#">Liked ${filteredData._count.reactions}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comments ${filteredData._count.comments}</a>
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
                      <h6 class="mb-1"> <a href="#">${filteredData.comments.owner} </a></h6>
                      <small class="ms-2">10hr</small>
                    </div>
                    <p class="small mb-0">${filteredData.comments.body}</p>
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
                          <a class="nav-link" href="#"> Like ${filteredData._count.reactions}</a>
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
                      <a href="#"><img class="post-img rounded-circle" src="https:xsgames.co/randomusers/avatar.php?g=male" alt=""></a>
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
      });

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
   * Edit post functions.
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

  async function updatePost() {

    const form = document.getElementById('updatePostForm');
    const formData = new FormData(form);
    const response = await fetch(API_SOCIAL_URL + "/posts/" + id, {
      method: 'PUT',
      cache: 'no-cache',
      body: JSON.stringify(formData)
    });

    return response.json();
    
  }
   if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}");
       }
      console.log("This is all of your posts", filteredData);
  
  console.log(usersPostContainer);

  
}

getUsersPosts();


// ######## TESTING SECTION FOR THIS FILE ########

// ######## END OF TESTING SECTION ########
