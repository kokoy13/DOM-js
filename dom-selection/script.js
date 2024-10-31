//DOM SELECTION
//document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'green';
judul.innerHTML = 'Andika Firansyah';

//document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');
//p[0].style.backgroundColor = 'lightblue';
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

//document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName('p1');

//document.querySelecetor() -> element
const sectionB = document.querySelector('#b');
sectionB.style.color = 'red';

//document.querySelecetor() -> NodeList
const li2 = document.querySelectorAll('li');
li2[1].style.color = 'black';

//Mempersempit Node Root
const p4 = sectionB.querySelector('p');
p4.style.color = 'yellow'

