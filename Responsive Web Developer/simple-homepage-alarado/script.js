const toggler = document.querySelector('.toggler-desktop');
const togglermobile = document.querySelector('.toggler-mobile');

const moonlight = document.querySelectorAll('.moon');
const moondark = document.querySelectorAll('.moonn');
const sunlight = document.querySelectorAll('.sun');
const sundark = document.querySelectorAll('.sunn');


function handleToggleClick() {
  toggleClasses(sundark);
  toggleClasses(sunlight);
  toggleClasses(moondark);
  toggleClasses(moonlight);
}

toggler.addEventListener("click", handleToggleClick);
togglermobile.addEventListener("click", handleToggleClick);

function toggleClasses(elements) {
  elements.forEach(element => {
    element.classList.toggle('d-none');
  });
}

