document.getElementById('btn1').addEventListener('click', function () {
    let spidey1 = document.querySelector('.spidey1');
    spidey1.classList.add('slinger');
    spidey1.addEventListener("animationend", () => {
        console.log = "let's go again!!!";
        spidey1.classList.remove('slinger');
    });
});


document.getElementById('btn2').addEventListener('click', function () {
    let spidey1 = document.querySelector('.spidey2');
    spidey1.classList.add('slinger');
    spidey1.addEventListener("animationend", () => {
        console.log = "let's go again!!!";
        spidey1.classList.remove('slinger');
    });
});

document.getElementById('btn3').addEventListener('click', function () {
    let spidey1 = document.querySelector('.spidey3');
    spidey1.classList.add('slinger');
    spidey1.addEventListener("animationend", () => {
        console.log = "let's go again!!!";
        spidey1.classList.remove('slinger');
    });
});

document.getElementById('btn4').addEventListener('click', function () {
    let spidey1 = document.querySelector('.spidey4');
    spidey1.classList.add('slinger');
    spidey1.addEventListener("animationend", () => {
        console.log = "let's go again!!!";
        spidey1.classList.remove('slinger');
    });
});


document.getElementById('btn5').addEventListener('click', function () {
    let spidey5 = document.querySelector('.spidey5');
    spidey5.classList.add('dangle');

    setTimeout(() => {
        spidey5.classList.remove('dangle');
    }, 11000);
});


document.getElementById('btn6').addEventListener('click', function () {
    let spidey1 = document.querySelector('.spidey6');
    spidey1.classList.add('slinger');
    spidey1.addEventListener("animationend", () => {
        console.log = "let's go again!!!";
        spidey1.classList.remove('slinger');
    });
});

document.getElementById('btn7').addEventListener('click', function () {
    let spidey1 = document.querySelector('.spidey7');
    spidey1.classList.add('slinger');
    spidey1.addEventListener("animationend", () => {
        console.log = "let's go again!!!";
        spidey1.classList.remove('slinger');
    });
});


document.getElementById('btn8').addEventListener('click', function () {
  document.querySelector('.spidey8').classList.add('lastone');
});

//bron: https://forum.freecodecamp.org/t/trigger-animations-with-button-press/214733/4 en Sanne!
