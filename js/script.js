const previousButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')
const moreButton = document.querySelector('.more-button')
// ====
// Add event listener for all buttons
previousButton.addEventListener('click', function () {
    index -= 1;
    if (index < 0) {
        index = studentInfo.length - 1;
    }
    generateStudent(index)
    return;
})
nextButton.addEventListener('click', function () {
    clickState = 0;
    index += 1;
    if (index === studentInfo.length) {
        index = 0;

    }
    generateStudent(index)
    return;
})

// Function that hides and displays the 'more info' section
moreButton.addEventListener('click', function () {
    if (clickState === 0) {
        document.querySelector('.more-info-div').style.display = 'none'
        clickState = 1
    } else {
        document.querySelector('.more-info-div').style.display = 'block'
        clickState = 0
    }
})
// Add const (delete later if not needed)
const imageDiv = document.querySelector('.image-div')
const imageImg = document.querySelector('.image-img')
const defaultInfoDiv = document.querySelector('.default-info-div')
const nameP = document.querySelector('.name-p')
const titleP = document.querySelector('.title-p')
const moreInfoDiv = document.querySelector('.more-info-div')
// ====
const nationalityP = document.querySelector('.nationality-p')
const nationalitySpan = document.querySelector('.nationality-span')
// ====
const skillsP = document.querySelector('.skills-p')
const skillsSpan = document.querySelector('.skills-span')
// ====
const driveP = document.querySelector('.drive-p')
const driveSpan = document.querySelector('.drive-span')
// ====
const visionP = document.querySelector('vision-p')
const visionSpan = document.querySelector('.vision-span')
// ====
const motivationP = document.querySelector('.motivation-p')
const motivationSpan = document.querySelector('.motivation-span')
// ====
const quoteP = document.querySelector('.quote-p')
let clickState = 0;
let index = 0;
// console.log(studentInfo)
// console.log(studentInfo[0])
// =======================================================================================
function generateStudent(i) {

    clickState = 0;
    const name = studentInfo[i].firstName + '' + studentInfo[i].lastName;
    nameP.innerHTML = name;

    const title = studentInfo[i].title;
    titleP.innerHTML = title;

    const nationality = studentInfo[i].nationality;
    nationalitySpan.innerHTML = nationality;

    const skills = studentInfo[i].skills
    skillsSpan.innerHTML = skills.join(', ');

    src = './assets/' + studentInfo[i].src;
    imageImg.src = src;

    const vision = studentInfo[i].longTermVision;
    visionSpan.innerHTML = vision

    const motivation = studentInfo[i].motivatesMe;
    motivationSpan.innerHTML = motivation
    const quote = studentInfo[i].favoriteQuote;
    quoteP.innerHTML = quote;

    console.log(name, title);
    return;
}



function initialize() {
    clickState = 0;
    generateStudent(index)
    for (let i = 0; i < studentInfo.length; i++) {
        if (i = studentInfo.length) {
            index = 0
        }
    };
    console.log(studentInfo[5])
}

initialize();
