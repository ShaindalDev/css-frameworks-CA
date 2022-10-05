import { API_SOCIAL_URL } from "../api/constants.mjs";
import * as storage from "../storage/storage.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  console.log(loginURL);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const result = await response.json();

  const { accessToken, ...user } = await response.json();

  storage.save("_token", accessToken);

  storage.save("profile", user);

  alert("You successfully logged in");
}
