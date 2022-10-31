let saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let listItems = "";
let myLeads = [];

saveBtn.addEventListener("click", (e) => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  listItems = "";
  renderLeads();
});

function renderLeads() {
  for (let index = 0; index < myLeads.length; index++) {
    listItems += `<li><a target="_blank" href="${myLeads[index]}">${myLeads[index]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
