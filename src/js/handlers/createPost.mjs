import { createPost } from "../posts/createPost2.mjs";
/**
 * This is the handler for creating a post and sending it to the API. This is used along with createPost2.mjs file in Posts folder
 */
console.log("Loaded");

const form = document.getElementById("postForm");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Clicked form");
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries())
    
    createPost(post)
});

