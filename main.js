// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalHide = document.getElementById('modal')
modal.className = "hidden"

function clickAlert() {
  alert('I was clicked!');
}

const likeButtons = document.querySelectorAll('.like-glyph');
likeButtons.forEach(function(likeButtons){
likeButtons.addEventListener('click', () => {
  mimicServerCall(url='http://mimicServer.example.com', config = {})
  .then ( () => {
    if (likeButtons.innerHTML == EMPTY_HEART) {
      likeButtons.innerHTML = FULL_HEART
      likeButtons.className = 'activated-heart'
    } else {
      likeButtons.innerHTML = EMPTY_HEART
    }
  })
  .catch(error => {
    modalHide.className = ""
    modalHide.innerText = error;
    setTimeout( () => {modalHide.className = "hidden"}, 3000)
  });
});
});
//const likeButtons = document.querySelectorAll('.like-glyph');
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
