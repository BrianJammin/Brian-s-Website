document.addEventListener("DOMContentLoaded", function () 
{

const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
  
const theme = localStorage.getItem('theme');
   
  if (theme) {
    document.body.classList.add('dark-mode');
  }

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme','dark-mode')
  } else {
    localStorage.removeItem('theme');
  }
  

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark' 
    : "Light"

  modeStatus.innerText = "" + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);


});
