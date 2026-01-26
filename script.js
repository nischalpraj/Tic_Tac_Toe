//selecting all required element
const selectbox = document.querySelector(".selectbox"),
  selectXbtn = selectbox.querySelector(".playerx"),
  selectobtn = selectbox.querySelector(".playero"),
  allbox = document.querySelectorAll("section span"),
  players = document.querySelector(".players"),
  playboard = document.querySelector(".playboard");

window.onload = () => {
  //when window loads

  for (let i = 0; i < allbox.length; i++) {
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
    players.classList.add("active", "player");
  };
};

let playerXicon = "fa-solid fa-x";
let player0icon = "fa-regular fa-circle";


//user click function
function clickedbox(element) {
  console.log(element)
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class="${player0icon}"></i>`;//adding circle icon at user clicked element
    players.classList.add("active");
  } else {
    element.innerHTML = `<i class="${playerXicon}"></i>`; //adding cross icon at user clicked element
    players.classList.add("active");

  }
  element.style.pointerEvents = "none";
}

//bot click function
function bot() {
  
}