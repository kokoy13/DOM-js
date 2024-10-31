//Menambahkan elemen baru diakhir parent
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(textPBaru);
pBaru.style.backgroundColor = 'green';

const secA = document.getElementById('a');
secA.appendChild(pBaru);    

//Menambahkan elemen baru diawal parent
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('List item baru');
liBaru.appendChild(textLiBaru);
liBaru.style.backgroundColor = 'green';

const ul = document.querySelector('section#b ul');
const li1 = ul.querySelector('li:nth-child(1)');
ul.insertBefore(liBaru,li1);

//Menghapus Child
const a = secA.querySelector('section#a a');
secA.removeChild(a);

//Replace Child
const judul2 = document.createElement('h1');
const textJudul2 = document.createTextNode('Judul 2');
judul2.appendChild(textJudul2);

const secB = document.getElementById('b');
const p4 = secB.getElementsByTagName('p')[0];
secB.replaceChild(judul2, p4);