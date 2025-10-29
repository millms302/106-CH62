function hello(){
    console.log("Hello");
}

function goodbye(){
    console.log("Goodbye");
}

function init(){
    console.log("Welcome to 106");
    hello();
}

window.onload = init; // waits until the html and the css finish 
// to execute the logic