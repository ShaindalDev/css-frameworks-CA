import { API_SOCIAL_URL } from "../api/constants.mjs";
// create a post from your profile
const createPost = document.getElementById("postForm");
const postButton = document.getElementById("postButton-submit");
const token = localStorage.getItem("_token");
/**
 * This let's the user create a post from their profile and put's it on the API for everyone to see. 
 * here is also the eventListener for the button that makes the POST request to the API. 
 */
createPost.addEventListener("submit", (event) => {
  console.log("this was clicked");
  event.preventDefault();
  const postTitle = createPost.postTitle.value;
  const postContent = createPost.postContent.value;
  const postMedia = createPost.postMedia.value
  const postTags = createPost.postTags.value
  
  try {
    fetch(`${API_SOCIAL_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        tags: postTags,
        media: postMedia,
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // localStorage.setItem("_token", data.accessToken);
        location.href = "/pages/index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
});

/**
 * This is just for manuel creation of a post trough the javascript file, uncomment the makePost(); at the bottom to create a post to the API
 */
function makePost(){
    const makePost = {
      method: 'POST',
      body: JSON.stringify({
        title: 'This a test',   // Required
        body: "Testing to see if i get the correct feed i want, and with even more text to fill up some space with random stuff",    // Optional
        tags: ['test, exploring'],  // Optional
        media: 'https://xsgames.co/randomusers/avatar.php?g=male',    // Optional
        owner: "Shaindal"

      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    
     fetch(`${mainURL}/social/posts`, makePost)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  console.log("create post was loaded");
  
    //  makePost();