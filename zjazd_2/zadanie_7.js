// ZADANIE 7
/*
Treść zadania:
Napisz skrypt dla wprowadzonej liczby całkowitej `n` wyświetli gwiazdkami w konsoli prostokąt złożony z `n` wierszy oraz `2n` kolumn.
*/

let n = prompt('Wpisz liczbe: ')
let star = '*'
let word = ''

for(let i = 0; i < n; i++){
    for(let i = 0; i < n * 2; i++){
        word += star
    }
    word += '\n'
}

console.log(word)
