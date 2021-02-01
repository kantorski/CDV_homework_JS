// ZADANIE 5
/*
Treść zadania:
Napisz skrypt, który sprawdzi czy podany ciąg znaków jest palindromem
*/

// Pierwszy sposób

let word = prompt('Wprowdź słowo aby sprawdzić cz jest ono palindromem')
// Poniżej zabezpiecznie jeżeli palindrom miałby spacje i duże litery
word = word.split(' ').join('').toLowerCase()
let reverseWord = ''

for (let i = word.length-1; i >= 0; i--){
    reverseWord += word[i]
}

if (word == reverseWord){
    alert('Podane słowo jest palindromem')
} else{
    alert('Podane słowo nie jest palindromem')
}


/*
// Drugi sposób
let word = prompt('Wprowdź słowo aby sprawdzić cz jest ono palindromem')
let wordArr = word.split(' ').join('').toLowerCase()
wordArr = wordArr.split('')
word = wordArr.join('')

reverseWord = wordArr.reverse().join('')

if (word == reverseWord){
    alert('Podane słowo jest palindromem')
} else{
    alert('Podane słowo nie jest palindromem')
}
*/