import './style.css'

const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;


function modeSwitch(){
  isLight = !true;
  isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
  let rootElement = document.body;
  rootElement.classList.toggle("lightMode");
}