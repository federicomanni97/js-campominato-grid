// al click sul bottone
// disegnare 64 quadratini 
/*al click sul quadratino lo sfondo del quadratino stesso deve diventare verde
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Solo se l'esercizio base funziona perfettamente: create una nuova cartella chiamata bonus e copiateci dentro tutti i files e cartelle dell'esercizio base tranne la cartella .git.
Poi procedete ad implementare il bonus come segue.
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/ 

const btn = document.getElementById('start');
btn.addEventListener('click', function(){
    //num di quadratini da generare
    const numSquare = 64;
    //mi prendo la griglia di gioco
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    //ciclo per stampare i quadratini
    for(let i = 0; i < numSquare; i++){
        //genero quadratino
        let square = drawSquare(i, numSquare);
        //appendo il quadratino alla griglia
        playground.append(square);
    }

});

function drawSquare(squareIndex, numSquare){
    const squareWidth = Math.sqrt(numSquare);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100 / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active');
    });
    return square;
}

const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');

easyButton.addEventListener('click', function(){
    const squareEasy = 49;
    playground.innerHTML = '';
    for(let i = 0; i < squareEasy; i++){
        //genero quadratino
        let square = drawSquare(i, squareEasy);
        //appendo il quadratino alla griglia
        playground.append(square);
    }
    function drawSquare(squareIndex, squareEasy){
        const squareWidth = Math.sqrt(squareEasy);
        const square = document.createElement('div');
        square.classList.add('squareEasy');
        square.style.width = `calc(100 / ${squareWidth})`;
        square.style.height = square.style.width;
        square.innerHTML = squareIndex + 1;
        square.addEventListener('click', function(){
            square.classList.add('active');
        });
        return square;
    }

})

mediumButton.addEventListener('click', function(){
    const squareMedium = 81;
    playground.innerHTML = '';
    for(let i = 0; i < squareMedium; i++){
        //genero quadratino
        let square = drawSquare(i, squareMedium);
        //appendo il quadratino alla griglia
        playground.append(square);
    }
    function drawSquare(squareIndex, squareEasy){
        const squareWidth = Math.sqrt(squareMedium);
        const square = document.createElement('div');
        square.classList.add('squareMedium');
        square.style.width = `calc(100 / ${squareWidth})`;
        square.style.height = square.style.width;
        square.innerHTML = squareIndex + 1;
        square.addEventListener('click', function(){
            square.classList.add('active');
        });
        return square;
    }

})

hardButton.addEventListener('click', function(){
    const squareHard = 100;
    playground.innerHTML = '';
    for(let i = 0; i < squareHard; i++){
        //genero quadratino
        let square = drawSquare(i, squareHard);
        //appendo il quadratino alla griglia
        playground.append(square);
    }
    function drawSquare(squareIndex, squareEasy){
        const squareWidth = Math.sqrt(squareHard);
        const square = document.createElement('div');
        square.classList.add('squareHard');
        square.style.width = `calc(100 / ${squareWidth})`;
        square.style.height = square.style.width;
        square.innerHTML = squareIndex + 1;
        square.addEventListener('click', function(){
            square.classList.add('active');
        });
        return square;
    }

})