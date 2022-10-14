import { API_SOCIAL_URL } from "../api/constants.mjs";

const filterPostContainer = document.querySelector('.index-post-box');

const searchPictures = () => {
    postContainer.textContent = "";
    fetchCall(postswithac, getWithJwt).then((data) => {
      const filteredPictures = data.filter((element) => {
        return element.media.substring(5, 0) === "https";
      });
      filteredPictures.forEach((element) => {
        htmlToRender(postContainer, element);
      });
      postContainer.insertAdjacentHTML(
        "afterbegin",
        "<p>Results " + filteredPictures.length + " posts with pictures</p>"
      );
      //   commentList();
      //   likeClick();
    });
  };