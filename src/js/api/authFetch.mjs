import { load } from "../storage/storage.mjs";

export function headers() {
    const token = load("_token");

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