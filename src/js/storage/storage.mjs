/**
 * This stores the auth token, profile info like name, email etc in localStorage.
 * @param {*} key 
 * @param {*} value 
 */
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function load(key) {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  
  export function remove(key) {
    localStorage.removeItem(key);
  }
  