/**
 * This is where all important global consts that is being reused all over is stored. 
 */
export const API_BASE_URL = 'https://nf-api.onrender.com';
export const API_BASE = '/api/v1';
export const API_SOCIAL = '/social';
export const postsUrl = '/posts';
export const API_SOCIAL_URL = `${API_BASE_URL}${API_BASE}${API_SOCIAL}`;


export const token = localStorage.getItem("_token");
export const profile = localStorage.getItem("profile");