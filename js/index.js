/*jshint esversion: 6 */

function getRandomColour() {
  let letters = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)]; // pick a random letter
  }
  return colour;
}

const changeColour = () => document.querySelector('html').style.backgroundColor = getRandomColour();
