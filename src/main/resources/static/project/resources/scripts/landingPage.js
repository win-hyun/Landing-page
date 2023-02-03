/* HEADER */
window.onload = function () {
    scrollFunction()
};
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 70) {
        let header = document.getElementById('header');
        if (!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function () {
                header.style.display = 'block';
            }, 40);
        }
    } else {
        const header = document.getElementById('header');
        if (header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);

function moveTo(id) {
    if (id === 'home') {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }
    document.getElementById('menu').classList.remove('show');
}

function moveTo(id) {
    if (id === 'brand') {
        window.scrollTo(0, 0);


    } else {
        window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }
    document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null, 'about'));
document.getElementById('navbarInformation').addEventListener('click', moveTo.bind(null, 'information'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
document.getElementById('navbarSkill').addEventListener('click', moveTo.bind(null, 'skill'));



/* PORTFOLIO AREA */

filterSelection('all');

function filterSelection(id) {
    let x, i;

    x = document.getElementsByClassName('listItem');
    for(i=0;i<x.length;i++){
        removeClass(x[i], 'active');
    }
    addClass(document.getElementById(id), 'active');

    x = document.getElementsByClassName('filterItem');
    if(id === 'all') id = '';
    for(i=0;i<x.length;i++){
        removeClass(x[i], 'show');
        if(x[i].className.indexOf(id) > -1)
            addClass(x[i], 'show');
    }
}


function addClass(element, name) {
    if(element.className.indexOf(name) === -1) {
        element.className += " " + name;
    }
}

function removeClass(element, name) {
    let arr;
    arr = element.className.split(" ");

    while(arr.indexOf(name) > -1){
        arr.splice(arr.indexOf(name), 1);
    }
    /* 배열의 원소들을 연결하여 하나의 값으로 만듭니다. */
    element.className = arr.join(" ");
}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('team').addEventListener('click', filterSelection.bind(null, 'team'));
document.getElementById('personal').addEventListener('click', filterSelection.bind(null, 'personal'));
// document.getElementById('practice').addEventListener('click', filterSelection.bind(null, 'practice'));

function viewPortfolio(event) {
    let polyNode = event.target;

    if(polyNode.tagName.toLowerCase() === 'i') { polyNode = polyNode.parentNode; }

    let overlayNode = polyNode;
    let imageNode = overlayNode.nextElementSibling;

    let itemNode = overlayNode.parentNode;
    let mainNode = itemNode.nextElementSibling;
    let subNode = mainNode.nextElementSibling;
    let textNode = subNode.nextElementSibling;

    document.getElementById('modelImage').src = imageNode.src;
    document.getElementById('modelMain').innerHTML = mainNode.innerHTML;
    document.getElementById('modelSub').innerHTML = subNode.innerHTML;
    document.getElementById('modelText').innerHTML = textNode.innerHTML;
    document.getElementById('portfolioModel').style.display = 'block';
}

document.getElementById('modelClose').addEventListener('click', function(){
    document.getElementById('portfolioModel').style.display = 'none';
});

let filterItems = document.getElementsByClassName('overlay');

for(let i=0;i<filterItems.length;i++){
    filterItems[i].addEventListener('click', viewPortfolio);
}

let reviewSlideIndex = 0;

function reviewSlideTimer() {
    plusReviewSlides(1);
}
let reviewTimer = setInterval(reviewSlideTimer, 5000);

function plusReviewSlides(n) {
    clearInterval(reviewTimer);
    reviewTimer = setInterval(reviewSlideTimer, 5000);
    showReviewSlides(reviewSlideIndex += n);
}

function showReviewSlides(n) {
    let i;
    let review_slides = document.getElementsByClassName('skill-slide');

    if (n > review_slides.length - 3) {
        reviewSlideIndex = 0;
    }

    if (n < 0) {
        reviewSlideIndex = review_slides.length - 3;
    }

    for (i = 0; i < review_slides.length; i++) {
        removeClass(review_slides[i], 'show');
        removeClass(review_slides[i], 'res-show');
        addClass(review_slides[i], 'hide');
    }

    removeClass(review_slides[reviewSlideIndex], 'hide');
    addClass(review_slides[reviewSlideIndex], 'res-show');
    removeClass(review_slides[reviewSlideIndex+1], 'hide');
    addClass(review_slides[reviewSlideIndex+1], 'show');
    removeClass(review_slides[reviewSlideIndex+2], 'hide');
    addClass(review_slides[reviewSlideIndex+2], 'show');
}

document.getElementById('skillPrev').addEventListener('click', plusReviewSlides.bind(null,-1));
document.getElementById('skillNext').addEventListener('click', plusReviewSlides.bind(null,1));






