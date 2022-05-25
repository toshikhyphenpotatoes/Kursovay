"use strict";
//Функционал модального окна
document.getElementById('popUpOpen').addEventListener('click', ()=>{
    document.getElementById('popUpWin').style.display = 'block';
})

document.getElementById('btnSub').addEventListener('click',()=>{
    document.getElementById('popUpWin').style.display = 'none';
})
//использование xml

let xml = new XMLHttpRequest();
xml.open("GET", "../xml/info.xml", false);
xml.send();
let datas = xml.responseXML.querySelector("information");
Array.from(document.getElementsByClassName("about__item-text"))[0].innerHTML = xml.responseXML.querySelector("information").children[0].innerHTML;
Array.from(document.getElementsByClassName("about__item-text"))[1].innerHTML = xml.responseXML.querySelector("information").children[1].innerHTML;
Array.from(document.getElementsByClassName("about__item-text"))[2].innerHTML = xml.responseXML.querySelector("information").children[2].innerHTML;

// плавная прокрутка
let hrefs = Array.from(document.querySelectorAll('a[href*="#"]'));
for(let anchor of hrefs){
    anchor.addEventListener('click', (e)=>{
        e.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector(''+blockId).scrollIntoView({behavior:"smooth"});
    })
}