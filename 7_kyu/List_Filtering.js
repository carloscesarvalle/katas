// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// First solution using for loop and typeof

// filter_list = arr => {
//     let newArray = []
//     for (let i = 0; i<arr.length; i++) {
//       if (typeof arr[i] === 'number') {
//         newArray.push(arr[i])
//       }
//     }
//     return newArray
//   }

//Second solution using filter

filter_list = arr => {
    return arr.filter(each => typeof each === 'number')
}


  console.log(filter_list([1,2,'aasf','1','123',123]) == [1,2,123])