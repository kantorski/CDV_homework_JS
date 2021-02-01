// ZADANIE 2
// https://docs.microsoft.com/pl-pl/office/troubleshoot/excel/determine-a-leap-year
/*
Treść zadania:
Napisz skrypt który dla podanego przez użytkownika roku zwróci informację czy jest on przestępny.
*/


let year = parseInt(prompt('Wpisz rok, aby sprawdzić czy jest on przestępny: '))

if (year % 4 == 0 && year % 100 != 0){
    alert('Podany rok jest rokiem przestepnym')
} else if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
    alert('Podany rok jest rokiem przestepnym')
} else{
    alert('Podany rok jest NIE rokiem przestepnym')
}
