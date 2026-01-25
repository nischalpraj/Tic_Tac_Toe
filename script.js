//selecting all required element
const selectbox = document.querySelector(".selectbox"),
  selectXbtn = selectbox.querySelector(".playerx"),
  selectobtn = selectbox.querySelector(".playero"),
  allbox = document.querySelectorAll("section span"),
  players=document.querySelector(".players"),
  playboard = document.querySelector(".playboard");

window.onload = () => {
  //when window loads

  for (let i = 0; i < Array.length; i++) {
    //add onclickt attritbute on all available section's span
    allbox[i].setAttribute("onclick", "clickedbox(this)");
  }
  selectXbtn.onclick = () => {
    selectbox.classList.add("hide"); //hide the pplay box when x is clicked
    playboard.classList.add("show"); //show playboard when x is clicked
  };
  selectobtn.onclick = () => {
    selectbox.classList.add("hide");
    playboard.classList.add("show");
    players.setAttribute("class", "players active");
  };
};

let playerXicon = "fas fa-times";
let player0icon = "far fa-circle";

function clickedbox(element) {
  if()
}
