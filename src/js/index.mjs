
import * as posts from "./posts/index.mjs";

import router from "./router.mjs";

import * as search from "./components/searchFunction.mjs";

search.setSearchPostListener();




router();
posts.getAllPosts();

