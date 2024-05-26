let spanBalance = document.getElementById("balance");

let spanLevelbone = document.getElementById("levelbone");
let spanLeveldogfood = document.getElementById("leveldogfood");
let spanLevelhouse = document.getElementById("levelhouse");

let spanLevelkyrsor = document.getElementById("levelkyrsor");
let spanLevelball = document.getElementById("levelball");
let spanLevelpovodok = document.getElementById("levelpovodok");

let check = document.getElementsByClassName("check");
let gifte = document.getElementById("gifte");

let balance = 0;
let click = 1;
let clak = 0;

let levelbone = 0;
let leveldogfood = 0;
let levelhouse = 0;

let levelkyrsor = 0;
let levelball = 0;
let levelpovodok = 0;

function bone(){ //функция косточки
    if(balance>=100){
        levelbone = levelbone + 1; //уровень + 1
        spanLevelbone.innerHTML = levelbone;
        click = click + 2; //при нажатии на кнопку добавляеться к основному клику + 2$
        balance = balance - 100; //от баланса -100$
        spanBalance.innerHTML = balance;
    }
}
function dogfood(){ //функция корма
    if(balance>=500){
        leveldogfood = leveldogfood + 1;
        spanLeveldogfood.innerHTML = leveldogfood;
        click = click + 5;
        balance = balance - 500;
        spanBalance.innerHTML = balance;
    }
}
function house(){ //функция дома
    if(balance>=10000){
        levelhouse = levelhouse + 1;
        spanLevelhouse.innerHTML = levelhouse;
        click = click + 15;
        balance = balance - 10000;
        spanBalance.innerHTML = balance;
    }
}
function kyrsor(){ //функция курсора мыши
    if(balance>=10){
        levelkyrsor = levelkyrsor + 1;
        spanLevelkyrsor.innerHTML = levelkyrsor;
        click = click + 1;
        balance = balance - 10;
        spanBalance.innerHTML = balance;
    }
}
function ball(){ //функция мячика
    if(balance>=300){
        levelball = levelball + 1;
        spanLevelball.innerHTML = levelball;
        click = click + 3;
        balance = balance - 300;
        spanBalance.innerHTML = balance;
    }
}
function povodok(){ //функция поводка
    if(balance>=1000){
        levelpovodok = levelpovodok + 1;
        spanLevelpovodok.innerHTML = levelpovodok;
        click = click + 10;
        balance = balance - 1000;
        spanBalance.innerHTML = balance;
    }
}
function dog(){ //функция собаки
    balance += click; //когда вы нажали на собаку к балансу + 1$
    clak ++;
    spanBalance.innerHTML = balance;
}
function gift(){
  
}

function achiv(){ //функция достижений
    document.getElementById("dialog").showModal(); //открывается окно где представлены достижения 
    countcheck = document.getElementsByClassName("countcheck");
    console.log(countcheck)
    for(let i=0; i<countcheck.length; i++){
        countcheck[i].innerHTML = clak;
        
    }
}