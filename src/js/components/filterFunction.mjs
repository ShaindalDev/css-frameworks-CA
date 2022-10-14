const todayPostSelection = document.querySelector('#today');
const oldestPostSelection = document.querySelector('#oldest');
const lastWeekSelection = document.querySelector('#lastWeek');
const removeFilterSelection = document.querySelector('#clear')


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const fortnight = day * 21;

const today = new Date();

todayPostSelection.addEventListener("change", () => {
  filterDate(today);
});

oldestPostSelection.addEventListener("change", () => {
  const threeweeks = new Date(today - fortnight);
  filterDate(threeweeks);
});

lastWeekSelection.addEventListener("change", () => {
  const lastWeek = new Date(today - week);
  filterDate(lastWeek);
});

removeFilterSelection.addEventListener("change", () => {
  
})

function filterDate(searchDate) {
  const filteredPostsByDate = 
}