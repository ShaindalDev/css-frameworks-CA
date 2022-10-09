
import * as posts from "./posts/index.mjs";


import * as listeners from "./handlers/index.mjs";
import * as search from "./components/searchFunction.mjs";

import { createPost }  from "./posts/createPost2.mjs";

import { updateUsersPost } from "./profile/updateUsersPost.mjs";

import { deletePost} from "./posts/deletePost.mjs";


// search.setSearchPostListener();
listeners.setCreatePostListener();


posts.getAllPosts();

// deletePost(3638)

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

