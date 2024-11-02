const outer = document.querySelector('.my-outer');
const rock = document.getElementById('rock');
const comRock = rock.cloneNode(true);
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const comOuter = document.querySelector('.com-outer');
const text = comOuter.querySelector('h1');

function randComp(){
    const rand = Math.floor(Math.random()*3+1);
    return rand;
}

function parsImg(){
    const img = randComp();
    if(img == 1){
        action = 'rock'
    }else if(img == 2){
        action = 'paper';
    }else{
        action = 'scissor';
    }
    return action;
}

rock.addEventListener('click',function () {
    const myAction = 'rock';
    const comAction = parsImg();
    outer.removeChild(paper);
    outer.removeChild(scissor);
    rock.style.backgroundColor = 'red';
    rock.style.transform = 'scale(1)';
    rock.style.cursor = 'auto';
    comOuter.removeChild(text);
    comOuter.appendChild(comRock);
},{ once: true });
paper.addEventListener('click',function () {
    const myaction = 'paper';
    const comAction = parsImg();
    outer.removeChild(rock);
    outer.removeChild(scissor);
    paper.style.backgroundColor = 'red';
    paper.style.transform = 'scale(1)';
    paper.style.cursor = 'auto';
});
scissor.addEventListener('click',function () {
    const myaction = 'scissor';
    const comAction = parsImg();
    outer.removeChild(paper);
    outer.removeChild(rock);
    scissor.style.backgroundColor = 'red';
    scissor.style.transform = 'scale(1)';
    scissor.style.cursor = 'auto';
});

