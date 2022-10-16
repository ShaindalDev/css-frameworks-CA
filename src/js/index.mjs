
import * as posts from "./posts/index.mjs";
import { renderPosts } from "./components/renderPost.mjs";
import { searchPosts } from "./components/searchFunction.mjs";
import { filterFeedAscending, filterFeedDescending } from "./handlers/filter.mjs";

let searchedPostToRender = posts;
let filteredPostsToRender = posts;

renderPosts(searchedPostToRender);
searchPosts(searchedPostToRender);

posts.getAllPosts();



filterFeedAscending(filteredPostsToRender);
filterFeedDescending(filteredPostsToRender);

// deletePost(4426)

// createPost({
//     title: "Sleepless nights?",
//     body: "Sleepless nights brings testing, not always a great idea tho",
//     tags: ["sleepless, testing, coffee"],
//     media: "https://picsum.photos/id/683/5184/2672"
// })

// updateUsersPost({
//     id: 3636,
//     title: "How was your weekend so far?",
//     body: "Any fun brought your way yet? Only coding or something else as well? Here it's been kids and gaming as well. UPDATED",
//     media: "https://picsum.photos/id/658/2508/1672"
// })

