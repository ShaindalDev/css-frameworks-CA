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
  console.log("this was a test");
  // event.preventDefault();
  const postTitle = createPost.postTitle.value;
  const postContent = createPost.postContent.value;
  const postTags = createPost.postTags.value
  const postMedia = createPost.postMedia.value
  
  try {
    fetch(`${API_SOCIAL_URL}/posts/`, {
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
        // location.href = "/index.html"
        location.reload();
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
        title: 'what does the weekend bring?',   // Required
        body: "Have the weekend brought any fun so far?",    // Optional
        tags: ['weekend, test'],  // Optional
        media: 'https://picsum.photos/id/659/2731/1536',    // Optional
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
  
  
    //  makePost();


    // #### TEST SECTION ####
    //NEW TESTING CREATE POST
// const createPostForm = document.getElementById("postForm");
// const createPostButton = document.getElementById("postButton-submit");

// createPostForm.addEventListener("submit", (e) => {
//   console.log("this was clicked");
//   e.preventDefault();

//   createPost(token, createPostForm);
// });

// export async function createPost(token, postContent, mediaURL) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset-UTF-8",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       title: " ",
//       body: postContent.value,
//       tags: [" "],
//       media: mediaURL.value || "https://picsum.photos/id/664/2513/1669",
//     }),
//   };

//   try {
//     const response = await fetch(`${API_SOCIAL_URL}/posts/`, options);
//     await response.json();
//     location.reload();
//   } catch (error) {
//     console.log(error);
//   }
// };
// END OF TESTING