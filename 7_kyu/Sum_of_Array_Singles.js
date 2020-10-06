// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.



// First solution using map, terciary operator and reduce

function repeats(arr){

    return arr
    //I'll map thru the array in order to get rid of repeated elements. A new array (unnamed) is created inside the function.
    //The unnamed array contains the elements that passed the terciary operator condition.
    //The result is an array with unique values and zeros.
    .map((element, index, array) => { return array.indexOf(element) === array.lastIndexOf(element) ? element : 0 })
    //I will sum all the unique values and the zeros from the unnamed array using reduce.
    //In arrow functions with simple syntax we don't need return.
    .reduce((accumulator, currentValue) => accumulator + currentValue)
   
}


//Second solution using filter and reduce

function repeats(arr){

return arr
//I'll filter the elements from the array that follows this condition: arr.indexOf(element) === arr.lastIndexOf(element)
.filter(element => arr.indexOf(element) === arr.lastIndexOf(element))
//I will sum all the filtered values
.reduce((accumulator, currentValue) => accumulator + currentValue)

}