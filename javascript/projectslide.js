
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark' 
    : "Light"

  modeStatus.innerText = "" + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);
// Write your code below
const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
  threshold: 0.4
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in1');
    } else { // this else part is not compulsory
      entry.target.classList.remove('slide-in1');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})