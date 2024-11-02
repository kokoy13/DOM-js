//Ubah Warna
const uWarna = document.getElementById('uWarna');

uWarna.addEventListener('click', function () {
    document.body.classList.toggle('green');
});

//Create Button with js
const btn = document.createElement('button');
const textBtn = document.createTextNode('Acak Warna');
btn.appendChild(textBtn);

const buttons = document.getElementsByClassName('button')[0];
buttons.appendChild(btn);

function randColor(){
    return Math.floor(Math.random()*255+1);
}

//Acak Warna
btn.addEventListener('click',function(){
    const r = randColor();
    const g = randColor();
    const b = randColor();
    document.body.style.backgroundColor = 'rgb('+r+','+g+', '+b+')';
});

//sliderWarna
const sRed = document.querySelector('input[name=sRed]');
sRed.addEventListener('input', function(){
    const r = sRed.value;
    document.body.style.backgroundColor = 'rgb('+r+',0, 0)';
});
const sGreen = document.querySelector('input[name=sGreen]');
sGreen.addEventListener('input', function(){
    const g = sGreen.value;
    document.body.style.backgroundColor = 'rgb(0,'+g+', 0)';
});
const sBlue = document.querySelector('input[name=sBlue]');
sBlue.addEventListener('input', function(){
    const b = sBlue.value;
    document.body.style.backgroundColor = 'rgb(0,0,'+b+')';
});

document.body.addEventListener('mousemove', function (event) {
    const xPost = Math.floor((event.clientX / window.innerWidth) * 255);
    const yPost = Math.floor((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+xPost, yPost,+'0)';

});

