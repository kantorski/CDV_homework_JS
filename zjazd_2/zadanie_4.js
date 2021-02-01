// ZADANIE 4
/*
Treść zadania:
Napisz skrypt, który sprawdzi czy dwa podane ciągi znaków są anagramami.
*/


let word = prompt('Podaj pierwszy wyraz: ')
let anagram = prompt('Wpisz drugi wyraz, aby sprawdzić czy jest on anagramem piewrszego:')

let wordArr = anagram.split('')
let anagramArr = word.split('')
let isItAnagram = 1

while (wordArr.length > 0){
    temp = wordArr.pop()
    if (anagramArr.includes(temp)){
        let index = anagramArr.indexOf(temp)
        anagramArr.splice(index, 1)
    } else{
        isItAnagram = 0
        break
    }
}

if (isItAnagram == 1 && word.length == anagram.length){
    alert('TAK, drugi wyraz jest anagramem pierwszego')
} else{
    alert('NIE, drugi wyraz nie jest angramem pierwszego')
}
