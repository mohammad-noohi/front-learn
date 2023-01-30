const dropdownItem = document.querySelector('.tutorial-course-button');
dropdownItem.addEventListener('click',(e)=>{
  dropdownItem.lastElementChild.classList.toggle('rotate-icon')
})