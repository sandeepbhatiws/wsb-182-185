
var output = document.getElementById('row').innerText;
document.getElementById('output').innerText = output;

var output = document.getElementById('row2').innerText;
var output = document.getElementById('row2').innerHTML;

document.getElementById('output').innerHTML = output;

var output = document.getElementsByClassName('row')
// console.log(output[2].innerText);

// var output = document.getElementsByTagName('div')
// console.log(output[0].innerHTML);


var output = document.querySelector('#row').innerText;
var output = document.querySelector('div').innerText;

var output = document.querySelectorAll('div');


// output.forEach( (value, index) => {
//     console.log(value.innerText)
//     console.log(index)
// })

// console.log(output[1].innerText);





var output = document.querySelector('#image1').src;

document.querySelector('#image2').src = output;
document.querySelector('#image1').src = 'images/2.png';

console.log(output);