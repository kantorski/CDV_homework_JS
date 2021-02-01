// ZADANIE 6
/*
Treść zadania:
Napisz skrypt, który wyświetli na konsli następujący "magiczny" trójkąt:
```
 A B R A K A D A B R A
  A B R A K A D A B R
   A B R A K A D A B
    A B R A K A D A
     A B R A K A D
      A B R A K A
       A B R A K
        A B R A
         A B R
          A B
           A
```
*/


let word = 'A B R A K A D A B R A'
let wordArr = word.split('')
let kadabra = ''
let pad = ''

while (wordArr.length > 0){
    newWord = pad + wordArr.join('')+ '\n'
    temp = wordArr.pop()
    if (temp == ' '){
        continue
    }
    kadabra += newWord
    pad += ' '
};

console.log(kadabra)
