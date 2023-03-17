
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = '#C42847';
    document.querySelector('#section1').style.color = 'white';
    document.querySelector('#section1').style.fontSize = '50px';

}

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = '#79C7C5';
}

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
}

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
}

function Multicolor() {
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section2').style.backgroundColor = '#79C7C5';
    document.querySelector('#section1').style.backgroundColor = '#C42847';
}