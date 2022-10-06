/**
 * This inserts the authentication headers that is required for everything that has to do with a request done to the API. 
 * @param {string} token this is the authentication token stored when you login to the application
 * @returns 
 */
export function headers() {
    const token = localStorage.getItem("_token");

    return {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    }
}
/**
 * This is a function to make it easier to run a request to the API, this contains all info required in the authorization header. 
 * @param {*} url 
 * @param {*} options 
 * @returns 
 */
export async function authFetch(url, options = {}) {
    return fetch(url,  {
        ...options,
        headers: headers()
    })
}