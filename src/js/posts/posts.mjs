
/**
 * This will fetch all posts from the Noroff social API
 * 
 */
export const mainURL = "https://nf-api.onrender.com/api/v1";
export const postsURL = "/social/posts/";
export const token = localStorage.getItem("_token");

export const postContainer = document.querySelector(".postWrapper");

export async function getAllPosts() {
  const authOptions = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${mainURL}/social/posts?sort=created&sortOrder=desc&_author=true&_reactions=true&_comments=true`, authOptions);
  const data = await response.json();
  console.log(data);
  postContainer.innerHTML = "";
  data.forEach(function (data, index) {
    postContainer.innerHTML += `<div class="postContainer col-md-6"><div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow p-2 h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">${data.author.name}</strong>
          <h3 class="mb-0">${data.title}</h3>
          <div class="mb-1 text-muted">Created:${data.created}</div>
          <p class="card-text mb-auto">${data.body}</p>
          
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src="${data.media}" class="bd-placeholder-img" width="150" height="150" role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false">
        </div>
        <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button> <i class="bi bi-chevron-down"></i>
         <a href="#" class="text-dtext btn btn-secondary-soft-hover py-1 px-2"  data-bs-toggle="dropdown">
         </a>
         <ul class="dropdown-menu dropdown-menu-end">
         
           <li><i class="fa-solid fa-pen"></i><a class="dropdown-item text-dtext" href="#">Update Post</a></li>
           <i class="fa-solid fa-trash-can">
           <li><a class="underlineHover dropdown-item text-dtext" id="deletePost" href="#">Delete Post </a></li></i>
           
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
                      <a href="#"><img class="post-img rounded-circle" src="${data.owner}" alt=""></a>
                    </div>
                    <div class="ms-2">
                      <div class="bg-dark p-3 rounded">
                        <div class="d-flex justify-content-between">
                          <h6 class="mb-1"> <a href="#"> Alice wonderland </a></h6>
                          <small class="ms-2">10hr</small>
                        </div>
                        <p class="small mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam architecto nulla iusto laudantium!</p>
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
                  <ul class="comment-item-nested list-unstyled">
                    <li class="comment-item">
                      <div class="d-flex">
                        <div class="post post-xs">
                          <a href="#"><img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=female" alt=""></a>
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
                              <a class="nav-link" href="#"> Like (3)</a>
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
                          <a href="#"><img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""></a>
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

  console.log(postContainer);
}

getAllPosts();

//get post by ID

//Update a post

//delete a post from feed

//filter posts

//search the post feed
