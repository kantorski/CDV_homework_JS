// ZADANIE 1
/*
Treść zadania:
Napisz funkcję która dla przekazanego argumentu zwróci typ danych. Dla obiektów dodatkowo powinna zostać zwrócona nazwa klasy.
*/

const getType = (checkVar) => {
    if (typeof(checkVar) === 'object'){
        return (typeof(checkVar) + ' ' + checkVar.constructor.name)
    }else{
        return (typeof(checkVar))
    }
}