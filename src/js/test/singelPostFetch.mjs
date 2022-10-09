
const singlePostUrl =
  "/social/posts/47?_author=true&_reactions=true&_comments=true";
const token = localStorage.getItem("_token");

const singelPostModal = document.getElementById("singlePostModal");
/**
 * This 
 */
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

//New fetch 

const singelPostURL = "https://nf-api.onrender.com/api/v1/social/post/618?_author=true&_reactions=true&_comments=true"

const postContainer = document.querySelector(".postContainer");
async function getsingelPost(url) {
	try {
		const response = await fetch(url);
		const post = await response.json();
		// console.log(post);
		
		post.forEach(function (posts) {
		  postContainer.innerHTML += `<div class="singelPost">
										  <h3 class="titleName">${posts.title.rendered}</h3>
										  <img class="singel-img" src="${posts.featured_media_src_url}">
										  <p>${posts.content.rendered}</p>
									</div>
									<br/>`;
		})
		
	  } catch (error) {
		console.log(error);
		postContainer.innerHTML = alert("error", error);
	  }
	}
	getsingelPost(singelpost);
