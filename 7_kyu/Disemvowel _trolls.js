// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



// First solution using for loop

// noVowels = str => {
  
//   let newWord = ""
 
//   for(let i=0; i < str.length; i++) {
   
//     if (str[i] !== "a" & str[i] !== "e" & str[i] !=="i" & str[i] !=="o" & str[i] !=="u" & str[i] !== "A" & str[i] !== "E" & str[i] !=="I" & str[i] !=="O" & str[i] !=="U") {
      
//     let res = str.slice(i,i+1)
    
//     newWord += res
//    }  
//   }
  
//   return newWord
// }



// Second solution using replace and regular expressions


// noVowels = str => str.replace(/[aeiou]/gi, '');

// g is to find all matches (without it it would find only the first one).

// i tells to be case insensitive.

// "//"" is for what goes inside the pattern.

// [] tells to match any character in a set. 

// For more references check Regular Expressions at https://www.w3schools.com/js/js_regexp.asp




//Third Solution using split, filter and join


noVowels = str => {
  
    const vowels = 'aeiouAEIOU';
    
      return str
      //split the string into individual elements inside an array including spaces and separated by commas
      .split('')
      //filter in the array the elements that follow the condition: 
      //return each element from the array splitted that matches in the group 'not being a vowel or vowel uppercase' 
      .filter(eachWord => !vowels.includes(eachWord))
      //join elements from the array into a string
      .join('')
    }
    
    
    
    
    console.log(noVowels("This website is for losers LOL!"))