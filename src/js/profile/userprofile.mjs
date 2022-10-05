import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { profile } from "../api/constants.mjs";
const profileImg = document.getElementById("profileImg");
const profilename = document.getElementById("profileName");
const profileInfo = document.getElementById("profileInfo");
const profileCount = document.getElementById("profileCount");
const profileFriends = document.getElementById("offcanvasRight");
// const token = localStorage.getItem("_token");
// const profile = localStorage.getItem("profile");

const action = "/profiles";

const profileWrapper = document.getElementById("profileWrapper");
async function makeProfile() {
  // const authOptions = {
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const getProfileURL = `${API_SOCIAL_URL}${action}/${profile}`;
  const response = await authFetch(getProfileURL);
  const data = await response.json();
  console.log(data);
  profileWrapper.innerHTML = "";
    profileWrapper.innerHTML += `<div class="profile-heading mt-4 mb-4 p-2 bg-lighter rounded border border-light">
        <div class="h-50px" style="background-image:url(#); background-position: center; background-size: cover; background-repeat: no-repeat"></div>
        <div class="card-body pt-0 border-0">
          <div class="text-center">
            <div class="text-center">
              <!-- profile image -->
              <div class="profile-img clearfix profile-img-lg profile-img-center mt-n5 mb-3" id="${profileImg}">
                <a href="#"><img class="profile-img rounded border border-white border-3 mw-100" src="${data.avatar}" alt="Image of the profile owner"></a>
              </div>
              <!-- Profile info -->
              <h5 class="mb-0" id="profileName"> <a href="#">${data.name} </a> </h5>
              <small>Web Developer at Developer Nation</small>
              <p class="mt-3" id="profileInfo">The Matrix is one hell of a source code, i like the challenge of working it</p>
              <!-- Followers, post and following stats -->
              <div class="hstack gap-2 gap-xl-3 justify-content-center" id="${profileCount}">
                <div>
                  <h6 class="mb-0">${data._count.posts}</h6>
                  <small>Post</small>
                </div>
                <div class="vr"></div>
                <div>
                  <h6 class="mb-0">${data._count.followers}</h6>
                  <small>Followers</small>
                </div>
                <div class="vr"></div>
                <div>
                  <h6 class="mb-0">${data._count.following}</h6>
                  <small>Following</small>
                </div>
              </div>
              <!-- Follower, post and following - end -->
            </div>
            <hr>
            <button class="btn btn-primary" type="button">Edit Profile</button>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Friends</button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Friends List</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <div class="post post-story ">
                  <a href="#"> <img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""> </a>
                </div>
                <div class="nav justify-content-center align-items-center">
                  <h6 class="nav-item card-title mb-3"> <a href="#"> Albus Doredumble</a></h6>
                </div>
                <div class="post post-story ">
                  <a href="#"> <img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""> </a>
                </div>
                <div class="nav justify-content-center align-items-center">
                  <h6 class="nav-item card-title mb-3"> <a href="#"> The mighty Thor</a></h6>
                </div>
                <div class="post post-story ">
                  <a href="#"> <img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""> </a>
                </div>
                <div class="nav justify-content-center align-items-center">
                  <h6 class="nav-item card-title mb-3"> <a href="#"> Loki Odinsson</a></h6>
                </div>
                <div class="post post-story ">
                  <a href="#"> <img class="post-img rounded-circle" src="https://xsgames.co/randomusers/avatar.php?g=female" alt=""> </a>
                </div>
                <div class="nav justify-content-center align-items-center">
                  <h6 class="nav-item card-title mb-3"> <a href="#"> Wanda Sakarov</a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>`;
  if (!response.ok) {
    throw new Error("HTTP Error! status: ${response.status}");
  }
  console.log(profileWrapper);
}
makeProfile();
