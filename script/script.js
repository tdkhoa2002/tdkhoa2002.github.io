window.addEventListener('scroll', function (e) {
    var header = document.getElementById('header');
    if (document.documentElement.scrollTop) {
        header.classList.remove('fixed');
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
        header.classList.add('fixed');
    }
})

var bar = document.querySelector('#wrapper header .container p i');

bar.addEventListener('click', function() {
    var menu = document.querySelector('#wrapper header .inner-header #main-menu')
    if(menu.style.right == "-500px") {
        menu.style.right = "0px";
    }else {
        menu.style.right = "-500px";
    }
})