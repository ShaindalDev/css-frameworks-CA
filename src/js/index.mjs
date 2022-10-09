
import * as posts from "./posts/index.mjs";

import router from "./router.mjs";

import * as search from "./components/searchFunction.mjs";

import { createPost } from "./posts/createPost2.mjs";

import { updateUsersPost } from "./profile/updateUsersPost.mjs";

import { deletePost} from "./posts/deletePost.mjs";

search.setSearchPostListener();




router();
posts.getAllPosts();

// deletePost(3638)

// createPost({
//     title: "this the first test to delete",
//     body: "ignore this test post, it's for testing my delete"
// })

// updateUsersPost({
//     id: 3636,
//     title: "How was your weekend so far?",
//     body: "Any fun brought your way yet? Only coding or something else as well? Here it's been kids and gaming as well. UPDATED",
//     media: "https://picsum.photos/id/658/2508/1672"
// })

