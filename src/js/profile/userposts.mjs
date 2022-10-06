//importing from other JS files
import { API_SOCIAL_URL } from "../api/constants.mjs";
import { setUpdatePostListener } from "../handlers/updatepost.mjs";
import { deletePost } from "../posts/deletePost.mjs";
// import { formatTimeChange } from "../components/formatTime.mjs";

// global const used in the file

const postsURL = "/posts";
const token = localStorage.getItem("_token");
const localEmail = localStorage.getItem("_email");
const postContainer = document.getElementById("usersPostWrapper");


/**
 * This is where all the info from the API is being fetched
 * and authentication is being checked
 */
export async function getUsersPosts() {
    const response = await fetch(
      `${API_SOCIAL_URL}${postsURL}?_author=true&_comments=true&_reactions=true&limit=300&offset=200`,
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
        return filtered.author.email == localEmail;
      });
      postContainer.innerHTML = "";
      filteredData.forEach((filteredData) => {

        // setting date and time constant for change info from API
        // const timeCreated = formatTimeChange(el.created);
        // const timeUpdated = formatTimeChange(el.updated);
        postContainer.innerHTML += `<div class="card border-0 userPostCard">
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
            <div class="dropdown">
             <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button> <i class="bi bi-chevron-down"></i>
              <a href="#" class="text-dtext btn btn-secondary-soft-hover py-1 px-2"  data-bs-toggle="dropdown">
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item text-dtext" href="#">Delete Post</a></li>
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
  
  console.log(postContainer);
}

getUsersPosts();


// ######## TESTING SECTION FOR THIS FILE ########
// export async function getUsersPosts() {
//   const authOptions = {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await fetch(
//     `${mainURL}/social/posts?_author=true&_comments=true&_reactions=true`,
//     authOptions
//   );
//   const data = await response.json();
//   console.log(data);
//   postContainer.innerHTML = "";
//   data.forEach(function (data, index) {
//     postContainer.innerHTML += `<div class="card border-0 userPostCard">
//     <div class="card-header border-0 pb-0 bg-lighter">
//       <div class="d-flex align-items-center justify-content-between">
//         <div class="d-flex align-items-center">
//           <div class="post post-story ">
//             <a href="#"> <img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""> </a>
//           </div>
//           <div>
//             <div class="nav">
//               <h6 class="nav-item card-title mb-0"> <a href="#"> Albus Doredumble</a></h6>
//             </div>
//             <p class="mb-0 small">Front-End developer at Dev-Nation</p>
//           </div>
//         </div>
//         <div class="dropdown">
//          <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button> <i class="bi bi-chevron-down"></i>
//           <a href="#" class="text-dtext btn btn-secondary-soft-hover py-1 px-2"  data-bs-toggle="dropdown">
//           </a>
//           <ul class="dropdown-menu dropdown-menu-end">
//             <li><a class="dropdown-item text-dtext" href="#">Save post</a></li>
//             <li><a class="dropdown-item text-dtext" href="#">Unfollow Albus Doredumble </a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div class="card-body">
//       <p>I'm excited to get the honor of working with Matrix source code.</p>
//       <img class="card-img" src="/images/compare-fibre-tiSE_paTt0A-unsplash.jpg" alt="Post">
//       <ul class="nav nav-stack py-3 small">
//         <li class="nav-item">
//           <a class="nav-link active" href="#">Liked (789)</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Comments (45)</a>
//         </li>
//       </ul>
//       <div class="d-flex mb-3">
//         <div class="post post-xs me-2">
//           <a href="#"> <img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""> </a>
//         </div>
//         <form class="w-100">
//           <textarea  class="form-control pe-4 bg-dim" rows="1" placeholder="Add a comment..."></textarea>
//         </form>
//       </div>
//       <ul class="comment-wrap list-unstyled">
//         <li class="comment-item">
//           <div class="d-flex position-relative">
//             <div class="post post-xs">
//               <a href="#"><img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=female" alt=""></a>
//             </div>
//             <div class="ms-2">
//               <div class="bg-dark p-3 rounded">
//                 <div class="d-flex justify-content-between">
//                   <h6 class="mb-1"> <a href="#"> Alice wonderland </a></h6>
//                   <small class="ms-2">10hr</small>
//                 </div>
//                 <p class="small mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam architecto nulla iusto laudantium!</p>
//               </div>
//               <ul class="nav py-2 small">
//                 <li class="nav-item">
//                   <a class="nav-link" href="#"> Like (6)</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#"> Reply</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#"> View 12 replies</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <ul class="comment-item-nested list-unstyled">
//             <li class="comment-item">
//               <div class="d-flex">
//                 <div class="post post-xs">
//                   <a href="#"><img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=female" alt=""></a>
//                 </div>
//                 <div class="ms-2">
//                   <div class="bg-dark p-3 rounded">
//                     <div class="d-flex justify-content-between">
//                       <h6 class="mb-1"> <a href="#"> Natasha Romanov </a> </h6>
//                       <small class="ms-2">5hr</small>
//                     </div>
//                     <p class="small mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, corrupti?</p>
//                   </div>
//                   <ul class="nav py-2 small">
//                     <li class="nav-item">
//                       <a class="nav-link" href="#"> Like (3)</a>
//                     </li>
//                     <li class="nav-item">
//                       <a class="nav-link" href="#"> Reply</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </li>
//             <li class="comment-item">
//               <div class="d-flex">
//                 <div class="post post-story post-xs">
//                   <a href="#"><img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""></a>
//                 </div>
//                 <div class="ms-2">
//                   <div class="bg-dark p-3 rounded">
//                     <div class="d-flex justify-content-between">
//                       <h6 class="mb-1"> <a href="#"> Loki Odinsson </a> </h6>
//                       <small class="ms-2">25min</small>
//                     </div>
//                     <p class="small mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos.</p>
//                   </div>
//                   <ul class="nav  py-2 small">
//                     <li class="nav-item">
//                       <a class="nav-link" href="#"> Like (39)</a>
//                     </li>
//                     <li class="nav-item">
//                       <a class="nav-link" href="#"> Reply</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </li>
//           </ul>
//           <a href="#" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
//             <div class="dotsdots me-2">
//               <span class="dotDot"></span>
//               <span class="dotDot"></span>
//               <span class="dotDot"></span>
//             </div>
//             Load more replies
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>`;
//   });

//   

//   console.log(postContainer);
// }

// getAllPosts();

//get post by ID

//Update a post

//delete a post from feed

//filter posts

//search the post feed
