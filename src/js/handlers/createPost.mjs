import { createPost } from "../posts/createPost2.mjs";

export const createPostForm = document.getElementById("postForm");

export const createPostFormData = (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    createPost(formValues);
}