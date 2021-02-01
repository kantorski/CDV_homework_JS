// ZADANIE 4
// https://css-tricks.com/snippets/javascript/shuffle-array/
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
/*
Treść zadania:
Napisz funkcję która dla przekazanego w argumencie wyrazu zwróci tablicę wszystkich możliwych permutacji* liter.
*/

const shuffle = (data) => {
    data = data.split('')
    let arr = []
    let temp = 1

    // liczba permutacji
    for (let i = 2; i < data.length; i++){
        temp = temp * i
    }

    while(arr.length <= temp){
        let fisherYates = data.sort(() => Math.random() - 0.5)
        let randomWord = fisherYates.join('')

        if (arr.includes(randomWord) == true){
            continue
        } else{
            arr.push(randomWord)
        }
    }
    console.log(temp)
    return arr
}