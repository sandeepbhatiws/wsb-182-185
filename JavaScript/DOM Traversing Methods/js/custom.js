function getParentNode(){
    var output = document.getElementById('html').parentNode;
    console.log(output); 
}

function getParentElement(){
    var output = document.getElementById('html').parentElement;
    console.log(output); 
}

function getChildNode(){
    var output = document.getElementById('main').childNodes;
    console.log(output); 
}

function getChildren(){
    var output = document.getElementById('main').children;
    console.log(output); 
}

function getFirstChild(){
    var output = document.getElementById('main').firstChild;
    console.log(output); 
}

function getFirstElementChild(){
    var output = document.getElementById('main').firstElementChild;
    console.log(output); 
}

function getLastChild(){
    var output = document.getElementById('main').lastChild;
    console.log(output); 
}

function getLastElementChild(){
    var output = document.getElementById('main').lastElementChild;
    console.log(output); 
}

function checkChildNodes(){
    var output = document.getElementById('output').hasChildNodes();
    console.log(output); 
}