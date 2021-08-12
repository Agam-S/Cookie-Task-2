import './style.css';
import { Cookie } from './models/Cookie';
import { SprinkleCookie } from './models/SprinkleCookie';
import { Colors } from './models/CookieEnums';

//============== Array of Cookies ========================================

const cookies: Cookie[] = [];

function init() {
  const cookie1: Cookie = new Cookie('Cookie1');
  const cookie2: Cookie = new Cookie('Cookie2');
  const cookie3: SprinkleCookie = new SprinkleCookie('SprinkleCookie', 'Brown');

  cookies.push(cookie1);
  cookies.push(cookie2);
  cookies.push(cookie3);

  //=================== Going through the selector ================================

  for (let cookie in cookies) {
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = cookies[cookie].name;
    newOption.value = String(cookies.indexOf(cookies[cookie]));
    cookieSelector.add(newOption);
  }

  let colourArray: Array<string> = [];

  for (let c in Colors) {
    if (isNaN(Number(c))) {
      colourArray.push(c);
    }
  }
  // ===================

  for (let enumColours in colourArray) {
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = colourArray[enumColours];
    newOption.value = String(colourArray.indexOf(colourArray[enumColours]));
    cookieColour.add(newOption);
  }

  cookieColour.value = cookies[0].colour;

  updateDisplay();
}

//===== Calling elements from HTML and declaring new ones =================================

const cookieSelector: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieSelector')
);

const cookieColour: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieColour-inp')
);

const cookiesDiv: HTMLElement = document.getElementById('cookiesDiv');

const colourButton: HTMLElement = document.getElementById('changeColour-btn');
colourButton.addEventListener('click', event => {
  changeColour();
});

const chipButton: HTMLElement = document.getElementById('addChocolateChip-btn');
chipButton.addEventListener('click', event => {
  addChocolateChip();
});

init();

//================ Functions ===================

function drawCookies() {
let cookiesDiv: HTMLElement = document.getElementById('cookiesDiv');

  // remove old cookies
  cookiesDiv.innerHTML = "";
  
  // create first cookie
  for(let cookie of cookies) {
    let newCookieDiv: HTMLElement = document.createElement('div');
    newCookieDiv.className = 'cookie';
    newCookieDiv.style.backgroundColor = cookie.colour;
    newCookieDiv.innerHTML = cookie.chocolateChipNum.toString();

    cookiesDiv.append(newCookieDiv);
  }

}
function changeColour() {
  let selectedCookie: Cookie;
  selectedCookie = cookies[cookieSelector.selectedIndex];

  selectedCookie.colour = cookieColour.value;
  console.log(cookieColour.value);

  updateDisplay();
}

function addChocolateChip() {
  cookies[cookieSelector.value].chocolateChipNum++;
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}
