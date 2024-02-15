//Modell


//View
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <button onclick="printNumbersLearning()">Print numbers</button>
    <button onclick="print2Gangen()">Print 2 gangen</button>
    <div id="numbers"></div>

    `;
}

//Controller

function print2Gangen() {
    //lage startvariabel og sett startverdi
    //en betingelse for hvor lenge løkken skal kjøre
    //hva skal skje med startvariablen
    for (let counter = 2; counter <= 20; counter = counter + 2) {
        document.getElementById('numbers').innerHTML += '<li>' + counter + '</li>';
    }
}

function printNumbersLearning() {
    //lage startvariabel og sett startverdi
    //en betingelse for hvor lenge løkken skal kjøre
    //hva skal skje med startvariablen
    for (let counter = 1; counter <= 10; counter++) {
        document.getElementById('numbers').innerHTML += '<li>' + counter + '</li>';
    }
}


/* Får du gjøre det om til en løkke/loop
function printNumbers() {
    document.getElementById('numbers').innerHTML += '<li>' + 1 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 2 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 3 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 4 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 5 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 6 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 7 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 8 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 9 + '</li>';
    document.getElementById('numbers').innerHTML += '<li>' + 10 + '</li>';
} */