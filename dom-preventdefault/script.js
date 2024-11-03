const cardContainer = document.querySelector('.container');
const card = document.querySelector('.container .card');
const close = document.querySelectorAll('a');

//General Metode
// close.addEventListener('click', function(){
//     cardContainer.removeChild(card);
// });

// //Traversal Metode
// const close2 = document.getElementById('remove');
// close2.addEventListener('click',function(){
//     close2.parentElement.parentElement.parentElement.removeChild(close2.parentElement.parentElement);
// });

//Traversal Metode
//parentNode
//parentElement
//nextSibling
//nextElementSibling
//previousSibling
//previousElementSibling

close.forEach(function(el){
    el.addEventListener('click',function(e){
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
        e.preventDefault();
    });
});

