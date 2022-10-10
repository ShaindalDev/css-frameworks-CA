import { createPost } from "../posts/createPost2.mjs";

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

    // const form = document.getElementById("postForm");

    //     form.addEventListener("submit", (event) => {
    //         event.preventDefault()
    //         console.log("this was clicked");
    //         const form = event.target;
    //         const formData = new FormData(form);
    //         const post = Object.fromEntries(formData.entries())

    //         createPost(post)
    //     })
