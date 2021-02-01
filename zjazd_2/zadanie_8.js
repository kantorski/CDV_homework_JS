// ZADANIE 8
/*
Treść zadania:
Napisz skrypt, który dla podanej liczby całkowitej `n` wyświetli gwiazdkami w konsoli trójkąt równoboczny złożony z `n` wierszy (w pierwszym wierszu jedna gwiadka a kolejne wiersze coraz szersze).
*/


// Trójkąt wersja 1

let n = prompt('Wpisz liczbe wierszy jaką ma mieć trójkąt: ')
let stars = '**'
let tempStar = '*'
let temp = ''
let triangle = ''

for (let i = n; i > 0; i--){
    triangle += temp.padStart(i) + tempStar + '\n'
    tempStar += stars
}


/*
// Trójkąt wersja 2

let n = prompt('Wpisz liczbe wierszy jaką ma mieć trójkąt: ')
let stars = '**'
let tempStar = '*'
let temp = ''
let triangle = ''

for (let i = n; i > 0; i--){
    tempStar = tempStar.split('').join(' ')
    triangle += temp.padStart(i * 2) + tempStar + '\n'
    tempStar = tempStar.split(' ').join('')
    tempStar += stars
}
*/
