let miImage = document.querySelector('img');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/giga.JPG') {
      miImage.setAttribute('src','images/giga2.png');
    } else {
      miImage.setAttribute('src', 'images/giga.JPG');
    }
}

let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');

function setUserName() {
  let myName = prompt('Por favor ingresa tu nombre.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'GIGATRADE es genial, ' + myName;
  }
}

if (! localStorage.getItem ('name')) {
  setUserName ();
} else {
  let storeName = localStorage.getItem ('name');
  myHeading.textContent = 'GIGATRADE es genial, ', + storeddName;
}

myButton.onclick = function() {
  setUserName();
}