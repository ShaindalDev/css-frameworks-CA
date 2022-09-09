const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwib…4NTd9.ghSBv7IUi5l6U2ySyV7A6UorV0ECZdignEszEDHE3Dg'
    },
}

const respons = await fetch(`$https://nf-api.onrender.com/api/v1/social/posts`, options)
const data = await response.json()