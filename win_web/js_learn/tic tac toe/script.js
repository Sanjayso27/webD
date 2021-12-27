let music = new Audio('music.mp3');
let ting = new Audio('ting.mp3');
let gameover=new Audio('gameover.mp3');
let turn ="X";
let end = false;

const changeTurn = ()=> {
    return turn ==="X"?"O":"X";
}

const checkWin = () => {
    let boxText = document.querySelectorAll('.boxtext');
    let wins = [
        [0,1,2,7.5,7.5,0],
        [3,4,5,7.5,30,0],
        [6,7,8,7.5,50,0],
        [0,3,6,-7.5,30,90],
        [1,4,7,7.5,30,90],
        [2,5,8,30,30,90],
        [0,4,8,7,29,37],
        [2,4,6,7,30,150]
    ];
    wins.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText!='') ){
            end=true;
            document.getElementsByClassName('turn')[0].innerText=boxText[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px";
            document.querySelector('.line').style.width="30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw ,${e[4]}vh) rotate(${e[5]}deg)`
            gameover.play();
        }
    });
}

// music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(elem =>{
    let boxText = elem.querySelector('.boxtext');
    elem.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText = turn;
            turn=changeTurn();
            ting.play();
            checkWin();
            if(!end)document.getElementsByClassName('turn')[0].innerText= 'Turn for ' + turn;
        }
    });
});

let reset = document.getElementsByClassName('btn');
reset[0].addEventListener('click',()=>{
    let boxes=document.querySelectorAll('.boxtext');
    Array.from(boxes).forEach(elem => {
        elem.innerText="";
        end=false;
        turn="X";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
        document.getElementsByClassName('turn')[0].innerText='Turn for ' + turn;
        document.querySelector('.line').style.width="0vw";
    });
});