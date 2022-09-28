// create a post from your profile
const v1baseUrl = "https://nf-api.onrender.com/api/v1";
const createEntryURL = "/social/posts"
const makePostForm = document.getElementById("postForm");
const postButton = document.getElementById("postButton-submit");

postButton.addEventListener("click", (event) => {
  const postTitle = createPost.postTitle.value;
  const postContent = createPost.postContent.value;
  
  try {
    fetch(`${v1baseUrl}/social/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        
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
        // location.href = "/pages/index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.log(error);
  }
  event.preventDefault();
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
  
    //  makePost();