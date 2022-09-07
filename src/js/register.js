fetch('https://nf-api.onrender.com/api/v1/social/auth/register', {
method: 'POST',
body: JSON.stringify({
    name: "Shaindal",
    email: "RobJoh57981@stud.noroff.no",
    password: "Ina130509"

}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => console.log(json));
