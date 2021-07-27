window.addEventListener('scroll', function (e) {
    var header = document.getElementById('header');
    if (document.documentElement.scrollTop) {
        header.classList.remove('fixed');
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
        header.classList.add('fixed');
    }
});