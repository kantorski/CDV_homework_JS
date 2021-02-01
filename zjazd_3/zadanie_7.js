// ZADANIE 7
/*
Treść zadania:
Napisz funkcję `flatten` która dla przekazanej tablicy tablic zwróci tablicę składającą się z elementów tablic wewnętrznych.
*/

/*
Wersja zaawansowana:
Dodaj obsługę dowolnego zagnieżdżenia tablic.
*/

const flatArr = (arr) => {
    let newArr = arr.flat(Infinity)
    return newArr
}