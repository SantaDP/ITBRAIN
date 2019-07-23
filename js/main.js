'use strict'

const langueIcons = document.querySelector('.langues-icon');
const selectedLang = document.querySelector('.selected');
const navMenuBtn = document.querySelector('.headder__top--nav-visibile');
const navList = document.querySelector('.nav--list ');



langueIcons.addEventListener('click', function(event) {
  event.preventDefault();
  let target = event.target;
  if(target.tagName === 'IMG')
  selectedLang.src = target.src;
  selectedLang.alt = target.alt;
  selectedLang.title = target.title; 
});

navMenuBtn.addEventListener('click', function(){
  navList.classList.toggle('active-list');
  navMenuBtn.classList.toggle('active-btn');

})







