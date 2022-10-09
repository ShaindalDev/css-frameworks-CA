import { API_SOCIAL_URL } from "../api/constants.mjs";

const allPosts = API_SOCIAL_URL;

 function searchResult(input, data) {
    const searchField = input.value.toLowerCase();
    let filteredData = data.filter((post) => {
        const postAuthor = post.author.name.toLowerCase();
        const title = post.title.toLowerCase();
        const body = post.body.toLowerCase();
        const tags = post.tags.map(tag => { return tag.toLowerCase();});

        if(postAuthor.startsWith(searchField)) {
            return true;
        } else if(input.value.length > 1 && title.indexOf(searchField) >= 0) {
            return true;
        } else if(input.value.length > 2 && body.indexOf(searchField) >= 0) {
            return true;
        } else {
            let isTag = false;
            tags.forEach(tag => {
                if(tag.startsWith(searchField)) {
                    console.log("it does")
                    isTag = true;
                }
            })
            return isTag
        }
    });
    if(searchField.length === 0) {
        filteredData = [];
    }
    return filteredData
};

export function setSearchPostListener(postsData) {
    const searchFeed = document.querySelector("#searchResultFeed");
    const searchInput = document.querySelector("#searchBar");
    searchInput.removeAttribute("disabled");

    function displayResult() {
        const result = searchResult(searchInput, postsData);
        searchFeed.innerHTML = `<p class="py-1 text-center">Search Result ${result.length}</p>`;
        result.forEach(post => {
            searchFeed.appendChild(createApost(post));
        });
        if(result.length === 0) {
            searchFeed.innerHTML = `<p class="py-1 text-center">Ohh.. sorry we couldn't find it </p>`;
        }
    }
    searchInput.addEventListener("keyup", displayResult);
};