//Action Declaration
const outer = document.querySelector('.my-outer');
const rock = document.getElementById('rock');
const comRock = rock.cloneNode(true);
const paper = document.getElementById('paper');
const comPaper = paper.cloneNode(true);
const scissor = document.getElementById('scissor');
const comScissor = scissor.cloneNode(true);
const comOuter = document.querySelector('.com-outer');
const text = comOuter.querySelector('h1');
const score = document.querySelector('h2 span');
const replay = document.querySelector('.replay');
const title = document.querySelector('.content-outer .content h1'); 
let scoreValue = 0;

//Random Computer Action
function randComp(){
    const rand = Math.floor(Math.random()*3+1);
    return rand;
}

//Parse Computer Action to Image
function parsImg(){
    const img = randComp();
    if(img == 1){
        action = comRock;
    }else if(img == 2){
        action = comPaper;
    }else{
        action = comScissor;
    }
    return action;
}

//Win, Lose, or Draw Condition
function Condition(my, com){
    if(my == 'rock' && com == comRock){
        title.innerHTML = 'Draw';
    }else if(my == 'rock' && com == comPaper){
        title.innerHTML = 'You Lose !!!';
        scoreValue -= 1;
        score.innerHTML = scoreValue;
    }else if(my == 'rock' && com == comScissor){
        title.innerHTML = 'You Win !!!';
        scoreValue += 1;
        score.innerHTML = scoreValue;
    }else if(my == 'paper' && com == comRock){
        title.innerHTML = 'You Win !!!';
        scoreValue += 1;
        score.innerHTML = scoreValue;
    }else if(my == 'paper' && com == comPaper){
        title.innerHTML = 'Draw';
    }else if(my == 'paper' && com == comScissor){
        title.innerHTML = 'You Lose !!!';
        scoreValue -= 1;
        score.innerHTML = scoreValue;
    }else if(my == 'scissor' && com == comRock){
        title.innerHTML = 'You Lose !!!';
        scoreValue -= 1;
        score.innerHTML = scoreValue;
    }else if(my == 'scissor' && com == comPaper){
        title.innerHTML = 'You Win !!!';
        scoreValue += 1;
        score.innerHTML = scoreValue;
    }else if(my == 'scissor' && com == comScissor){
        title.innerHTML = 'Draw';  
    }
}


//Event
rock.addEventListener('click',function () {
    const myAction = 'rock';
    const comAction = parsImg();
    outer.removeChild(paper);
    outer.removeChild(scissor);
    rock.style.backgroundColor = 'red';
    rock.style.transform = 'scale(1)';
    rock.style.cursor = 'auto';
    comOuter.removeChild(text);
    comOuter.appendChild(comAction);
    comAction.style.backgroundColor = 'red';
    comAction.style.transform = 'scale(1)';
    comAction.style.cursor = 'auto';
    replay.style.display = 'flex';
    Condition(myAction, comAction);
},{ once: true });

paper.addEventListener('click',function () {
    const myAction = 'paper';
    const comAction = parsImg();
    outer.removeChild(rock);
    outer.removeChild(scissor);
    paper.style.backgroundColor = 'red';
    paper.style.transform = 'scale(1)';
    paper.style.cursor = 'auto';
    comOuter.removeChild(text);
    comOuter.appendChild(comAction);
    comAction.style.backgroundColor = 'red';
    comAction.style.transform = 'scale(1)';
    comAction.style.cursor = 'auto';
    replay.style.display = 'flex';
    Condition(myAction, comAction);
},{ once: true });

scissor.addEventListener('click',function () {
    const myAction = 'scissor';
    const comAction = parsImg();
    outer.removeChild(paper);
    outer.removeChild(rock);
    scissor.style.backgroundColor = 'red';
    scissor.style.transform = 'scale(1)';
    scissor.style.cursor = 'auto';
    comOuter.removeChild(text);
    comOuter.appendChild(comAction);
    comAction.style.backgroundColor = 'red';
    comAction.style.transform = 'scale(1)';
    comAction.style.cursor = 'auto';
    replay.style.display = 'flex';
    Condition(myAction, comAction);
},{ once: true });

