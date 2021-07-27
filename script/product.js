
var buttons = document.querySelectorAll('button' + ' img');
var img = document.getElementById('image');

buttons.forEach(button => {
    let url_image = button.getAttribute('src');
    button.onclick = event => {
        event.preventDefault();
        img.setAttribute('src',url_image);
    }
})


// var url_image = document.getElementById("image").getAttribute('src');





/*
lấy giá trị thuộc tính src của cái hình bự ra
khi click vào button thì sẽ lấy giá trị của thuộc tính src gán cho giá trị thuộc tính src của hình bự


*/



var h3 = document.querySelector('#info' + ' h3')
var i = document.querySelector('#info' + ' h3 i')

h3.addEventListener('click', function() {
    let attribute = i.getAttribute('class');
    if(attribute === 'fas fa-minus') {
        i.setAttribute('class',"fas fa-plus");
    }else {
        i.setAttribute('class',"fas fa-minus");
    }
    let ps = document.querySelectorAll('#info' + ' p');
    ps.forEach(p => {
        if(p.style.opacity == '0' || p.style.opacity == null) {
            p.style.opacity = '1';
        }
        else {
            p.style.opacity = '0';
        }
    })
})