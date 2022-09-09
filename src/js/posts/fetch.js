let postShown = 10;

function countNumber() {
    postShown += 10;
}

// const baseUrl = "https://nf-api.onrender.com/api/v1/social/posts";
const moreBtn = document.querySelector("#moreBtn");
const viewBtn = document.querySelector(".viewBtn");

const postContainer = document.querySelector(".postContainer");

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwib…4NTd9.ghSBv7IUi5l6U2ySyV7A6UorV0ECZdignEszEDHE3Dg',
    },
}

fetch('https://nf-api.onrender.com/api/v1/social/posts', options) {
    mehtod: 'GET', 
})
    .then((response) => response.json())
    .then((json) => console.log(json));