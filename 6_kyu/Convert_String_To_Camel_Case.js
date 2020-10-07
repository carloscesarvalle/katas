// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// First Solution using split, map and join

toCamelCase = str => {
  
    if (str.split('-').length > 1) {
     return str.split('-') 
    .map((element, index)=>{
       
       if(index!==0){
         return element[0].toUpperCase() + element.slice(1)
       }
       else {
         return element
       }
       
     })
    .join('')  
    }
    
    else if (str.split('_').length > 1) {
      return str.split('_') 
      .map((element, index)=>{
       
       if(index!==0){
         return element[0].toUpperCase() + element.slice(1)
       }
       else {
         return element
       }
       
     })
      .join('') 
    }
    
      else {
      return ''
    }
    
  }   

  

//Test


console.log(toCamelCase("the-stealth-warrior")) 

console.log(toCamelCase("The_Stealth_Warrior")) 

console.log(toCamelCase(""))