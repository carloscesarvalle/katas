
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
//   or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



// First Solution using for loops

const duplicateEncode = str => {
 
    //Convert the string to lower case to avoid capitalization differences, and splitting the string into an array separated by commas 
    let array = str.toLowerCase().split('')
    // console.log(array)
    
    //Looping inside the new array in order to check for duplicates. If one or more are found, push them inside duplicates array only if they are not there already.
    let duplicates =[]
    for(i=0; i<array.length; i++){
         for(j=i+1; j<array.length; j++){
             if((array[i]===array[j])&(duplicates.indexOf(array[i])===-1)) {
             duplicates.push(array[i])
        }  
      } 
    }
    // console.log(duplicates)  
     
      
    //Conditional. I'm comparing 2 arrays: array and duplicates. I loop thru each element of array to see if it is a duplicate. If it is, I push ')' into a new array called result. If it is not a duplicate and I didn't push ')', i'll push '(' after checking that that array value in that particular index is undefined.
     
      
     let result = []
      
     for (i=0; i<array.length; i++){
           //loop inside a loop to check for duplicates. The child loop uses "j".
           for (j=0; j<duplicates.length; j++){
              
               if(array[i]===duplicates[j]){
                 result.push(')')
               }
             
           }
           // condition inside the parent loop (that uses "i") if nothing is push to array result in that particular index   
           if(result[i]===undefined){
           result.push('(')
       }
       
     }
    
    //Declaring new variable finalResult that is going to be all elements from result join together as a string  
    let finalResult = result.join('')
      
    // console.log(finalResult)
    return finalResult
      
    }
   
   
   
   //Tests 
    
   duplicateEncode(" ( ( )")
   // expected answer: )))))(
   
   duplicateEncode('aSScTIFSSGS)S')
   // expected answer: ())(((())()()
   
   duplicateEncode("din")
   // expected answer: (((
   
   duplicateEncode("recede")
   // expected answer: ()()()
   
   duplicateEncode("Success")
   // expected answer: )())())
   
   duplicateEncode("(( @")
   // expected answer: ))((
   