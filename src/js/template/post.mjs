
  /**
 * Filters and Displays posts based on three filtering options: 
 * todays posts - yesterdays posts - posts with media
 * @param {string} postDataList
 * @param {string} parent 
 */

 export function renderFilteredPost(postDatalist, parent) {
    const container = document.querySelector('#postContainer');
    const filterTwentyFourHours = document.querySelector('#yesterdayPost');
    const filterTwoDays = document.querySelector('#twoDaysAgo');
    const filterTwoWeeks = document.querySelector('#twoWeeks');
  
    const day = 1000 * 60 * 60 * 24;
    const twoDays = day * 2;
    const twoWeeks = day * 14;
    const currentTime = new Date();
  
    filterTwentyFourHours.addEventListener("click", () => {
      const twentyFour = new Date(currentTime - day).toISOString();
      container.innerHTML = "";
  
      const filteredDates = postDatalist.filter(post => post.updated <= twentyFour)
  
      filteredDates.forEach(i => {
        if (i) {
          parent.append(postTemplate(i)) 
        }
      }) 
    })
  
    filterTwoDays.addEventListener("click", () => {
      const twoDaysAgo = new Date(currentTime - twoDays).toISOString();
      container.innerHTML = "";
  
      const filteredDates = postDatalist.filter(post => post.updated <= twoDaysAgo)
  
      filteredDates.forEach(i => {
        if (i) {
          parent.append(postTemplate(i)) 
        }
      }) 
    })

    filterTwoWeeks.addEventListener("click", () => {
      const twoWeeks = new Date(currentTime - twoWeeks).toISOString();
      container.innerHTML = "";
  
      const filteredDates = postDatalist.filter(post => post.updated <= twoWeeks)
  
      filteredDates.forEach(i => {
        if (i) {
          parent.append(postTemplate(i)) 
        }
      }) 
    })
  }