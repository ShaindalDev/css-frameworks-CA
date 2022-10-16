/**
 * This is not in use for the time being. Will be added in future versions of the application
 * @param {*} createPost 
 * @returns 
 */
/**
 * This creates the HTML to display post data from the API. 
 */
export function postCardTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title; // The title of the post 
  
  const button = document.createElement('button');
  post.append(button); // creates a button in the HTML

  button.addEventListener("click", () => console.log(postData)) // adds event listener to the button when clicked
  return post;
};
/**
 * This renders the HTML for a single Card for a single post from the API. 
 * @param {} postData 
 * @param {*} parent 
 */
export function renderpostCardTemplate(postData, parent) {
  parent.appen(postCardTemplate(postData))
};

/**
 * This renders all posts from the API and creates the cards for each post in HTML. 
 * @param {*} postDataList 
 * @param {*} parent 
 */
export function renderPostscardTemplates(postDataList, parent) {
 const PostHTMLElements =  postDataList.map(postCardTemplate)
 parent.append(...PostHTMLElements)
}