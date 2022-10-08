//importing from other JS files
import { API_SOCIAL_URL } from "../api/constants.mjs";
import { setUpdatePostListener } from "../handlers/updatepost.mjs";
import { deletePost } from "../posts/deletePost.mjs";
// import { formatTimeChange } from "../components/formatTime.mjs";

// global const used in the file

const postsURL = "/posts";
const token = localStorage.getItem("_token");
const localEmail = localStorage.getItem("_email");
const userName = localStorage.getItem("profile");
const usersPostContainer = document.getElementById("usersPostWrapper");


/**
 * This will get all the user's post that has been created. 
 * A filter method is used to show only the user's post and not all other posts. 
 * Authentication is run here as well to check if you are logged in with a valid user email and password
 * @param {string} token This is the token that has been stored when login function was run
 */
export async function getUsersPosts() {
    const response = await fetch(
      `${API_SOCIAL_URL}${postsURL}?sort=owner&sortOrder=desc&_author=true&_comments=true&_reactions=true`,
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
//Filter the data received from API
/**
 * Filter function, to filter all the data that comes from the API, down to a single users data.
 */
 
      const filteredData = data.filter((filtered) => {
        return filtered.author.name == userName;
      });
      usersPostContainer.innerHTML = "";
      filteredData.forEach((filteredData) => {

        // setting date and time constant for change info from API
        // const timeCreated = formatTimeChange(el.created);
        // const timeUpdated = formatTimeChange(el.updated);
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
                <li><a class="dropdown-item text-dtext" id="removePost" href="#" data-id="${filteredData.id}">Delete Post</a></li>
                <li><a class="dropdown-item text-dtext" href="#">Update Post </a></li>
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
      });

   if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}");
       }
      console.log("This is all of your posts", filteredData);
  
  console.log(usersPostContainer);
}

getUsersPosts();


// ######## TESTING SECTION FOR THIS FILE ########

// ######## END OF TESTING SECTION ########

//get post by ID

//Update a post

//delete a post from feed

//filter posts

//search the post feed
