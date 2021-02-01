// ZADANIE 5
/*
Treść zadania:
Napisz funkcje pozwalające zakodować oraz odkodować wiadomości Szyfrem Cezara
*/

const cezar = (text, value) =>{
    let arr = text.split('')
    let newArr = []
    let newNumber = ''
    
    arr.map(function(element){
        number = element.charCodeAt()
        if( number  == 32){
            newNumber = 32
        } else if (number <= 90 && number >= 65 && number + value > 90){
            newNumber = ((number + value) - 90) + 64
        } else if (number >= 97 && number <= 122 && number + value > 122){
            newNumber = ((number + value) - 122) + 96
        } else if(number <= 90 && number >= 65 && number + value < 65){
            newNumber = 91 - (65 - (number + value))
        } else if(number >= 97 && number <= 122 && number + value < 97){
            newNumber = 123 - (97 - (number + value))
        } else {
            newNumber = number + value
        }
        newWord = String.fromCharCode(newNumber)
        newArr.push(newWord)
    })
    
    let newText = newArr.join('')
    return newText
}