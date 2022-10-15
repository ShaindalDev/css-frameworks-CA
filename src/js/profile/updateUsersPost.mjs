import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/posts";
const method = "put";
/**
 * This is the function that is run when a user want to update a post they have created. And makes a PUT request to the API so that the updated data can be displayed for everyone.
 * @param {*} postData 
 * @returns 
 */

  /**
   * Edit post functions.
   */

  async function editPost(id) {

    const response = await authFetch(`${API_SOCIAL_URL}/posts/` + id,
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
// export async function updateUsersPost(postData) {
//     if (!postData.id) {
//         throw new Error("To update a post it requires a postID");
//     }
//     const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    
//     const response = await authFetch(updatePostURL, {
//         method,
//         body: JSON.stringify(postData)
//     })

//     return await response.json();
// }