import { createPost } from "../posts/createPost2.mjs";

export function setCreatePostListener() {
    const form = document.getElementById("postForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

            createPost(post)
        })
    }
}