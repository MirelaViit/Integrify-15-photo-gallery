const previousButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')
const moreButton = document.querySelector('.more-button')
// ====
// Add event listener for all buttons
previousButton.addEventListener('click', function () { })
nextButton.addEventListener('click', function () { })
moreButton.addEventListener('click', function () {
    if (clickState === 0) {
        document.querySelector('.more-info-div').style.display = 'block'
        clickState = 1
    } else {
        document.querySelector('.more-info-div').style.display = 'none'
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
// console.log(studentInfo)
// console.log(studentInfo[0])
// =======================================================================================
function generateStudent(object) {
    const name = object.firstName + '' + object.lastName;
    nameP.innerHTML = name;

    const title = object.title;
    titleP.innerHTML = title;

    const nationality = object.nationality;
    nationalitySpan.innerHTML = nationality;

    const skills = object.skills
    skillsSpan.innerHTML = skills;

    src = './assets/' + object.src;
    imageImg.src = src;

    const vision = object.longTermVision;
    visionSpan.innerHTML = vision

    const motivation = object.motivatesMe;
    motivationSpan.innerHTML = motivation
    const quote = object.favoriteQuote;
    quoteP.innerHTML = quote;

    console.log(name, title);
    return;
}



function initialize() {
    generateStudent(studentInfo[0]);
}

initialize();
