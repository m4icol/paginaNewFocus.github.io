const navContainer = document.querySelector('.navContainer');

window.addEventListener('scroll', function() {
    navContainer.classList.toggle('active', window.scrollY >0)
})


