
import * as posts from "./posts/index.mjs";
import { renderPosts } from "./components/renderPost.mjs";
import { searchPosts } from "./components/searchFunction.mjs";

import * as search from "./components/searchFunction.mjs";

import { createPost }  from "./posts/createPost2.mjs";

// import { updateUsersPost } from "./profile/updateUsersPost.mjs";




let searchedPostToRender = posts;

renderPosts(searchedPostToRender);
searchPosts(searchedPostToRender);

posts.getAllPosts();

// deletePost(4426)

// createPost({
//     title: "Sleepless nights?",
//     body: "Sleepless nights brings testing, not allways a great idea tho",
//     tags: ["sleepless, testing, coffee"],
//     media: "https://picsum.photos/id/683/5184/2672"
// })

// updateUsersPost({
//     id: 3636,
//     title: "How was your weekend so far?",
//     body: "Any fun brought your way yet? Only coding or something else as well? Here it's been kids and gaming as well. UPDATED",
//     media: "https://picsum.photos/id/658/2508/1672"
// })

