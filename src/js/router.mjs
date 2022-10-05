// import * as templates from "./templates/index.mjs";

import * as listeners from "./handlers/login.mjs";
// import * as posts from "./api/posts/index.mjs";

export default function router () {
const path = location.pathname;

switch (path) {
  case "/pages/login.html/":
    listeners.setLoginFormListener();
    return;
    case "/pages/login.html/":
    listeners.setRegisterFormListener();
    // return;
    // case "/post/create/":
    // listeners.setCreatePostListener();
    // return;
    // case "/post/edit/":
    // listeners.setUpdatePostListener();
    // return;
    // case "/profile/edit/":
    // listeners.setUpdateProfileListener();
    // return;
}
}