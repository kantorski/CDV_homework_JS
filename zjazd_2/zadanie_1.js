//  ZADANIE 1
/*
Treść zadania:
Napisz skrypt który dla podanych przez użytkownika liczb oddzielonych przecinkami wyliczy i wyświetli ich średnią arytmetyczną.
Wartości nieliczbowe powinny zostać pominięte w obliczeniach.
*/


let numbers = prompt('Podaj liczby dla których chcesz wyliczyć średnią arytmetyczną') 
let arr = numbers.split(',')
let numberArr = []

for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i]) == false){
        numberArr.push(parseInt(arr[i]))
    }
}

alert(numberArr.reduce((x, y) => x + y, 0) / numberArr.length)
