const mainURL = "https://nf-api.onrender.com/api/v1";
const singlePostUrl =
  "/social/posts/47?_author=true&_reactions=true&_comments=true";
const token = localStorage.getItem("_token");

const singelPostModal = document.getElementById("singlePostModal");
//get all posts feed
async function getSinglePost() {
  const authOptions = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${mainURL}${singlePostUrl}`,
    authOptions
  );
  const data = await response.json();
  console.log(data);
  singelPostModal.innerHTML = "";
}
getSinglePost();
