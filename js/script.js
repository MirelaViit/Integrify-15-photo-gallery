/* GLOBAL VARIABLES ********************************************** */

const photoDiv = document.querySelector('.photo-div');
const photoImg = document.querySelector('.photo-img');

const nameDd = document.querySelector('.name-dd');
const titleDd = document.querySelector('.title-dd');

const moreInfoDl = document.querySelector('.more-info-dl');
const nationalityDd = document.querySelector('.nationality-dd');
const skillsDd = document.querySelector('.skills-dd');
const driveDd = document.querySelector('.drive-dd');
const visionDd = document.querySelector('.vision-dd');
const motivationDd = document.querySelector('.motivation-dd');
const quoteDd = document.querySelector('.quote-dd');

const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const moreButton = document.querySelector('.more-button');

let clickState = 0;
let index = 0;



/* FUNCTIONS ******************************************************* */

// update fields based on current index
function generateStudent(i) {

    // get file name from object in array
    src = studentInfo[i].src;
    alt = studentInfo[i].alt;

    // if no file name, don't display image
    if (src === "") {
        photoImg.style.display = "none";
    }

    // otherwise, display image and generate src
    else {
        photoImg.style.display = "block";
        photoImg.src = './assets/' + src;
        photoImg.alt = 'Portrait of ' + alt;
    };

    // get name from object in array
    const name = studentInfo[i].firstName + ' ' + studentInfo[i].lastName;

    // set as inner HTML
    nameDd.innerHTML = name;

    const title = studentInfo[i].title;
    titleDd.innerHTML = title;

    // if teacher, do not show more (only name and title available)
    if (i === 0) {
        moreButton.style.display = "none";
        return;
    }

    else {
        moreButton.style.display = "block";
    };
  
    const nationality = studentInfo[i].nationality;
    nationalityDd.innerHTML = nationality;

    const skills = studentInfo[i].skills.join(', ');
    skillsDd.innerHTML = skills;
  
    const drive = studentInfo[i].whySoftwareDeveloper;
    driveDd.innerHTML = drive;

    const vision = studentInfo[i].longTermVision;
    visionDd.innerHTML = vision;

    const motivation = studentInfo[i].motivatesMe;
    motivationDd.innerHTML = motivation;

    const quote = studentInfo[i].favoriteQuote;
    quoteDd.innerHTML = quote;

    return;
};

// when clicking moreButton, change clickState and update style accordingly
function displayMore() {
    if (clickState === 0) {
        moreInfoDl.style.display = 'none';
        clickState = 1;
    }

    else {
        moreInfoDl.style.display = 'block';
        clickState = 0;
    }

    return;
};



/* EVENT LISTENERS *************************************************************** */

previousButton.addEventListener('click', function () {
    // reset clickState
    clickState = 0;

    // run displayMore() 
    displayMore();

    // decrease index by 1
    index -= 1;

    // if at beginning of array, go to end of array
    if (index < 0) {
        index = studentInfo.length - 1;
    }

    // generate student
    generateStudent(index);

    return;
});

nextButton.addEventListener('click', function () {
    clickState = 0;
    displayMore();

    index += 1;

    if (index === studentInfo.length) {
        index = 0;
    };

    generateStudent(index);

    return;
})

// Function that hides and displays the 'more info' section
moreButton.addEventListener('click', function () {
    displayMore();

    return;
});




/* EXECUTION ******************************************************** */

function initialize() {
    clickState = 0;
    displayMore();
    generateStudent(index);

    return; 
}

initialize();