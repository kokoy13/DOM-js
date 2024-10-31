//element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = 'Manipulation DOM';
//element.style.<propertiCSS>
const p1 = document.getElementsByClassName('p1')[0];
p1.style.color = 'blue';
//element.getAttribute()
const a = document.querySelector('a');
a.getAttribute('href');
a.innerHTML = 'Andika Firansyah';
//element.setAttribute()
a.setAttribute('href','http://instagram.com/andikafiransyah09');
//element.removeAttribute()
const b = document.querySelector('section#a p:nth-child(3)');
b.removeAttribute('title');
//element.classList.add()

//element.classList.remove()
//element.classList.toggle()
//element.classList.item()
//element.classList.contains()
//element.classList.replace()