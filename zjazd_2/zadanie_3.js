// ZADANIE 3
/*
Treść zadania:
Napisz skrypt który przekształca temperaturę podaną w stopniach Celsjusza na temperaturę w stopniach Fahrenheita.
*/


let transform = degree => (degree * 1.8) + 32
let degreeCelsius = parseInt(prompt('Wpisz tempearture w stopniach celsjusza którą chcesz zamienić na skale Faranheita'))

alert(transform(degreeCelsius) + '\u00B0' + 'F')
