import { getUsersPosts } from "../profile/userposts.mjs";
import { updatePost } from "../profile/updateUsersPost.mjs";
export async function updatePostListener() {
  const form = document.getElementsByClassName("updatePostForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {


    const post = await getUsersPosts(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media

    

    form.addEventListener("submit", (event) => {
      console.log("this was clicked")
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries())
      post.id = id;

      updatePost(post)
    });

  }

  updatePostListener();
}
  

