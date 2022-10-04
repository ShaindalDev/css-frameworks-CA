// Functionality for updating users post will come here
fetch('https://nf-api.onrender.com/api/v1/social/profiles/Shaindal/media', {
method: 'PUT',
body: JSON.stringify({
    banner: "The Matrix is one hell of a source code, i like the challenge of working with it",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",

}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${token}`,
},
})
.then((response) => response.json())
.then((json) => console.log(json));
