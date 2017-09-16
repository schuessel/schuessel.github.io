var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/title.jpg') {
    myImage.setAttribute ('src', 'images/image2.jpg')
  }
  else if (mySrc === 'images/image2.jpg') {
    myImage.setAttribute ('src', 'images/image3.jpg')
  }
  else {
    myImage.setAttribute ('src', 'images/title.jpg')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Carl Bauer begrüßt den Nutzer' + myName);
}

/*
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Carl Bauer grüßt den Nutzer ' + myName;
}
*/


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Carl Bauer grüßt den Nutzer ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
