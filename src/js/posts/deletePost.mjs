
const deletePost = document.getElementById("deletePost");
const mainURL = "https://nf-api.onrender.com/api/v1";
const token = localStorage.getItem("_token");

export function deletePost() {
    const deletePosts = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
      
       fetch(`${mainURL}/social/posts/30`, deletePosts)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    deletePost();
