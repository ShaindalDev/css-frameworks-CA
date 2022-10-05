

export function headers() {
    const token = localStorage.getItem("_token");

    return {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    }
}

export async function authFetch(url, options = {}) {
    return fetch(url,  {
        ...options,
        headers: headers()
    })
}