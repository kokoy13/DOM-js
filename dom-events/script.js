//Event Handler
const p3 = document.querySelector('.p3');

function changeBackground(){
    p3.style.backgroundColor = 'red';
}

//addEventListener
const add = document.querySelector('.p4 .icon #add');
const remove = document.querySelector('.p4 .icon #remove');

add.addEventListener('click', function(){
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('New Paragraf');
    liBaru.appendChild(textLiBaru);

    const secB = document.getElementById('b');
    const ul = secB.querySelector('ul');
    ul.appendChild(liBaru);
});

remove.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const lastLi = ul.querySelector('li:last-child');
    
    ul.removeChild(lastLi);
});

