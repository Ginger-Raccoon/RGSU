document.querySelectorAll('.tabs-wrapper__button').forEach((item) => 
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const id = event.target.getAttribute('href').replace('#', '')

    document.querySelectorAll('.tabs-wrapper__button').forEach((child) => {
      child.classList.remove('tabs-wrapper__button_active')
    });

    document.querySelectorAll('.tabs-wrapper__form').forEach((child) => {
      child.classList.remove('tabs-wrapper__form_active')
    });

    item.classList.add('tabs-wrapper__button_active');
    document.getElementById(id).classList.add('tabs-wrapper__form_active');
  }));

document.querySelector('.tabs-wrapper__button').click();

document.querySelector('.login__button').addEventListener('click', function(event){
  event.preventDefault();
});

document.querySelector('.button_refuse').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.form_check-in').classList.remove('tabs-wrapper__form_active');
  document.querySelector('.form_login').classList.add('tabs-wrapper__form_active');
  document.querySelector('.tabs-wrapper__button').click();
});