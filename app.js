// SELECTORS
const images = [
    {
        img: './img/img-1.jpeg'
    },
    {
        img: './img/img-2.jpeg'
    },
    {
        img: './img/img-3.jpeg'
    },
    {
        img: './img/img-4.jpeg'
    },
    {
        img: './img/img-5.jpeg'
    },
];
const container = document.querySelector('.img-container');
const img = document.querySelector('img');

const btns = document.querySelectorAll('.btn');
const nextBtn = document.querySelector('#nextBtn');
let inter;

let number = 1;

// EVENT LISTENERS
const slideImg = setInterval(imageChange, 3000);


// FUNCTIONS
function imageChange(){
    img.src = images[number].img;
    number++;

    if(number > images.length - 1){
        number = 0;
    }
}

// FUNCTION to RESET the INTERVAL after NEXT button has been clicked
function resetInterval(){
    inter = setInterval(imageChange, 3000);
}

// BUTTON to change IMAGE
nextBtn.addEventListener('click', () => {
    clearInterval(slideImg); // Clears initial INTERVAL for rest of time
    clearInterval(inter); // Clears continuous INTERVAL to stop multiple executions
    img.src = images[number].img;
    number++;

    if(number > images.length - 1){
        number = 0;
    }
    resetInterval();
});

// MOUSEOVER event to show BUTTONS
container.addEventListener('mouseover', () => {
    nextBtn.classList.add('active');
});
container.addEventListener('mouseout', () => {
    nextBtn.classList.remove('active');
});
// INVOKE FUNCTION
