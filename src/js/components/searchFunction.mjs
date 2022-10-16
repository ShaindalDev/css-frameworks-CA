import { renderPosts } from "./renderPost.mjs";
/**
 * This is the search bar function, it will give the result typed in search bar and replace posts with matching result.
 * @param {*} post 
 */
export function searchPosts(post) {
    const searchBar = document.querySelector('#searchBar');
    searchBar.onkeyup = function (event) {
        console.log(event);

        const searchValues = event.target.value.trim().toLowerCase();

        const filteredPosts = post.filter((post) => {
            if (post.title.toLowerCase().includes(searchValues)) {
                return true;
            } else if (post.author.name.toLowerCase().includes(searchValues)) {
                return true;
            }
        });
        renderPosts(filteredPosts);
        // console.log(filteredPosts);
    };
    
};
