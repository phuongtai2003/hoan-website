// Menu Item
const menuItem = document.querySelectorAll(".menu-item");
const carouselList = document.querySelectorAll(".slider");


for(let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click',function(){
        menuItem.forEach(element => {
            element.classList.remove('active-item');
        });
        carouselList.forEach(element => {
            element.classList.remove('active-carousel');
        });
        menuItem[i].classList.add('active-item');
        carouselList[i].classList.add('active-carousel');
    });
}

// Modeling slider
let currentModelSlider = 0;
const modelNumber = document.querySelectorAll(".modeling-number");
const modelInnerSlide = document.querySelectorAll(".modeling-slider [class^='slide-']");
const modelIndicator = document.querySelectorAll(".modeling-slider .slider-indicator [class^='carousel-']");

function changeModelingSlider(index){
    modelNumber.forEach(element => {
        element.classList.remove('active-number');
    });
    modelInnerSlide.forEach(element => {
        element.classList.remove('active-slide');
    });
    modelNumber[index].classList.add('active-number');
    modelInnerSlide[index].classList.add('active-slide');
    currentModelSlider = index;
}

for(let i = 0; i < modelNumber.length; i++){
    modelNumber[i].addEventListener('click', function(){ changeModelingSlider(i);});
}


for(let i = 0; i < modelIndicator.length; i++){
    modelIndicator[i].addEventListener('click', function(){
        if(i == 0){
            currentModelSlider -= 1;
            if(currentModelSlider == -1){
                currentModelSlider = 2;
            }
            changeModelingSlider(currentModelSlider);
        }
        else{
            currentModelSlider += 1;
            if(currentModelSlider == 3){
                currentModelSlider = 0;
            }
            changeModelingSlider(currentModelSlider);
        }
    });
}

// Web slider
let currentWebIndex = 0;
const webNumber = document.querySelectorAll(".web-number");
const webInnerSlide = document.querySelectorAll(".web-slider [class^='slide-']");
const webIndicator = document.querySelectorAll(".web-slider .slider-indicator [class^='carousel-']");

function changeWebSlide(index){
    webNumber.forEach(element => {
        element.classList.remove('active-number');
    });
    webInnerSlide.forEach(element => {
        element.classList.remove('active-slide');
    });
    webNumber[index].classList.add('active-number');
    webInnerSlide[index].classList.add('active-slide');
    currentWebIndex = index;
}

for(let i = 0; i < webNumber.length; i++){
    webNumber[i].addEventListener('click', function(){ changeWebSlide(i);});
}

for(let i = 0; i < webIndicator.length; i++){
    webIndicator[i].addEventListener('click', function(){
        if(i == 0){
            currentWebIndex -= 1;
            if(currentWebIndex == -1){
                currentWebIndex = 2;
            }
            changeWebSlide(currentWebIndex);
        }
        else{
            currentWebIndex += 1;
            if(currentWebIndex == 3){
                currentWebIndex = 0;
            }
            changeWebSlide(currentWebIndex);
        }
    });
}


// design slider
const designNumber = document.querySelectorAll(".design-number");
const designInnerSlide = document.querySelectorAll(".design-slider [class^='slide-']");
const designIndicator = document.querySelectorAll(".design-slider .slider-indicator [class^='carousel-']");
let currentDesignIndex = 0;

function changeDesignSlide(index){
    designNumber.forEach(element => {
        element.classList.remove('active-number');
    });
    designInnerSlide.forEach(element => {
        element.classList.remove('active-slide');
    });
    designNumber[index].classList.add('active-number');
    designInnerSlide[index].classList.add('active-slide');
    currentDesignIndex = index;
}

for(let i = 0; i < designNumber.length; i++){
    designNumber[i].addEventListener('click', function(){ changeDesignSlide(i);});
}


for(let i = 0; i < designIndicator.length; i++){
    designIndicator[i].addEventListener('click', function(){
        if(i == 0){
            currentDesignIndex -= 1;
            if(currentDesignIndex == -1){
                currentDesignIndex = 2;
            }
            changeDesignSlide(currentDesignIndex);
        }
        else{
            currentDesignIndex += 1;
            if(currentDesignIndex == 3){
                currentDesignIndex = 0;
            }
            changeDesignSlide(currentDesignIndex);
        }
    });
}
const imagesItem = document.querySelectorAll(".carousel-item-image");
console.log(imagesItem.length);
const classesList = ['inactive-image-left', 'inactive-image-right', 'active-image-left', 'active-image-right'];
function changeImagePosition(inactiveIndexes, activeIndexes){
    imagesItem[inactiveIndexes[0]].classList.remove(...classesList);
    imagesItem[inactiveIndexes[1]].classList.remove(...classesList);
    imagesItem[activeIndexes[0]].classList.remove(...classesList);
    imagesItem[activeIndexes[1]].classList.remove(...classesList);

    imagesItem[inactiveIndexes[0]].classList.add(classesList[0]);
    imagesItem[inactiveIndexes[1]].classList.add(classesList[1]);
    imagesItem[activeIndexes[0]].classList.add(classesList[2]);
    imagesItem[activeIndexes[1]].classList.add(classesList[3]);
}

let inactiveImgList = [0,3];
let activeImgList = [1,2];

const imgCarouselPrevBtn = document.querySelector(".carousel-prev-btn");
const imgCarouselNextBtn = document.querySelector(".carousel-next-btn");


imgCarouselPrevBtn.addEventListener('click', function (){
    inactiveImgList = inactiveImgList.map(function(element){
        if(element == 0){
            return 3;
        }
        else{
            return --element;
        }
    });
    activeImgList = activeImgList.map(function (value) {
        if(value == 0){
            return 3;
        }
        else{
            return --value;
        }
    })
    changeImagePosition(inactiveImgList, activeImgList);
});

imgCarouselNextBtn.addEventListener('click', function (){
    inactiveImgList = inactiveImgList.map(function(element){
        if(element == 3){
            return 0;
        }
        else{
            return ++element;
        }
    });
    activeImgList = activeImgList.map(function (value) {
        if(value == 3){
            return 0;
        }
        else{
            return ++value;
        }
    })
    changeImagePosition(inactiveImgList, activeImgList);
});