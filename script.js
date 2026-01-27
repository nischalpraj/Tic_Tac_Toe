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
let playersign = "X"; //suppose player sign is X

//user click function
function clickedbox(element) {
  console.log(element);
  if (players.classList.contains("player")) {
    element.innerHTML = `<i class="${player0icon}"></i>`; //adding circle icon at user clicked element
    players.classList.add("active");
    playersign = "O";
    element.setAttribute("id", playersign);
  } else {
    element.innerHTML = `<i class="${playerXicon}"></i>`; //adding cross icon at user clicked element
    players.classList.add("active");
    element.setAttribute("id", playersign);
  }
  element.style.pointerEvents = "none";
  let randomDelaytime = (Math.random() * 1000 + 200).toFixed(); //generating random delay time to make bot delay randomly to select box
  console.log(randomDelaytime);
  setTimeout(() => {
    bot(); //calling bot function
  }, randomDelaytime); //passing random delay time
}

//bot click function
function bot() {
  playersign = "O";
  let array = []; //creating empty array
  for (let i = 0; i < allbox.length; i++) {
    if (allbox[i].childElementCount == 0) {
      //if span has no any child element
      array.push(i); //inserting unclicked or unselected box inside array means that span has no children
      console.log(i + " " + "has no children");
    }
  }
  let randomBox = array[Math.floor(Math.random() * array.length)];
  console.log(randomBox);
  if (array.length > 0) {
    if (players.classList.contains("player")) {
      allbox[randomBox].innerHTML = `<i class="${playerXicon}"></i>`; //adding cross icon at user clicked element
      players.classList.add("active");
      playersign = "X";
      allbox[randomBox].setAttribute("id", playersign);
    } else {
      allbox[randomBox].innerHTML = `<i class="${player0icon}"></i>`; //adding circle icon at user clicked element
      players.classList.remove("active");
      allbox[randomBox].setAttribute("id", playersign);
    }
  }
  allbox[randomBox].style.pointerEvents = "none"; //once bot select any box user cannot seslect same box
}
