const openFormButton = document.querySelector('.openFormButton');
const closeFormButton = document.querySelector('.closeFormButton');
const popupForm = document.querySelector('.popup-background');

export function openForm() {
  openFormButton.addEventListener('click', function() {
    popupForm.classList.toggle('active');
  });

  closeFormButton.addEventListener('click', function() {
    popupForm.classList.remove('active');
  })
}
