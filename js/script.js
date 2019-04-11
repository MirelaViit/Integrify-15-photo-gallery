/* GLOBAL VARIABLES ********************************************** */

const imageDiv = document.querySelector('.image-div');
const imageImg = document.querySelector('.image-img');

const defaultInfoDiv = document.querySelector('.default-info-div');
const nameP = document.querySelector('.name-p');
const titleP = document.querySelector('.title-p');

const moreInfoDiv = document.querySelector('.more-info-div');

const nationalityP = document.querySelector('.nationality-p');
const nationalitySpan = document.querySelector('.nationality-span');

const skillsP = document.querySelector('.skills-p');
const skillsSpan = document.querySelector('.skills-span');

const driveP = document.querySelector('.drive-p');
const driveSpan = document.querySelector('.drive-span');

const visionP = document.querySelector('vision-p');
const visionSpan = document.querySelector('.vision-span');

const motivationP = document.querySelector('.motivation-p');
const motivationSpan = document.querySelector('.motivation-span');

const quoteP = document.querySelector('.quote-p');

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
    // if no file name, don't display image
    if (src === "") {
        imageImg.style.display = "none";
        imageDiv.style.background = "#FBB503";
    }
    // otherwise, display image and generate src
    else {
        imageImg.style.display = "block";
        imageDiv.style.background = "white";
        imageImg.src = './assets/' + src;
    };

    // get name from object in array
    const name = studentInfo[i].firstName + ' ' + studentInfo[i].lastName;
    // set as inner HTML
    nameP.innerHTML = name;

    const title = studentInfo[i].title;
    titleP.innerHTML = title;

    // if teacher, do not show more (only name and title available)
    if (i === 0) {
        moreButton.style.display = "none";
        return;
    }

    else {
        moreButton.style.display = "block";
    }

    const nationality = studentInfo[i].nationality;
    nationalitySpan.innerHTML = nationality;

    const skills = studentInfo[i].skills;
    skillsSpan.innerHTML = skills.join(', ');

    const drive = studentInfo[i].whySoftwareDeveloper;
    driveSpan.innerHTML = drive;

    const vision = studentInfo[i].longTermVision;
    visionSpan.innerHTML = vision;

    const motivation = studentInfo[i].motivatesMe;
    motivationSpan.innerHTML = motivation;

    const quote = studentInfo[i].favoriteQuote;
    quoteP.innerHTML = quote;

    return;
}

// when clicking moreButton, change clickState and update style accordingly
function displayMore() {
    if (clickState === 0) {
        document.querySelector('.more-info-div').style.display = 'none';
        clickState = 1;
    }

    else {
        document.querySelector('.more-info-div').style.display = 'block';
        clickState = 0;
    }
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
})

nextButton.addEventListener('click', function () {
    clickState = 0;
    displayMore();

    index += 1;
    if (index === studentInfo.length) {
        index = 0;

    }
    generateStudent(index)
    return;
})

// Function that hides and displays the 'more info' section
moreButton.addEventListener('click', function () {
    displayMore();
})




/* EXECUTION ******************************************************** */

function initialize() {
    clickState = 0;
    displayMore();

    generateStudent(index);
}

initialize();
