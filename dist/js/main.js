"use strict";
var header = document.getElementById('header');
var title = document.getElementById('title');
var excerpt = document.getElementById('excerpt');
var profileImg = document.getElementById('profile_img');
var nameEl = document.getElementById('name');
var dateEL = document.getElementById('date');
var animatedBgs = document.querySelectorAll('.animated-bg');
var animatedBgTexts = document.querySelectorAll('.animated-bg-text');
function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit recusandae cupiditate laboriosam, quisquam corrupti.';
    profileImg.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    nameEl.innerHTML = 'John Doe';
    dateEL.innerHTML = 'Dec 24, 2020';
    animatedBgs.forEach(function (bg) { return bg.classList.remove('animated-bg'); });
    animatedBgTexts.forEach(function (text) { return text.classList.remove('animated-bg-text'); });
}
setTimeout(getData, 2500);
