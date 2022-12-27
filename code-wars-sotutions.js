// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//Multiples of 3 or 5
function solution(number) {
    //Initialize a variable and assign it to 0, this variable will hold our sum
    let sum = 0; 
    // create a for loop so we can find the numbers that are multiples of 3 or 5, up until the number given
    
    for (let i = 1; i < number; i++) { 
      
        // if statement checks out condition, if num % 3 or 5 is 0, that means its a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) { 
          
            //if condition is true, we want to add that number to sum
            sum += i 
        }
    }
    //return sum
    return sum;
}

//Who Likes it?
function likes(names = []) {
    // if names array is empty, return the corressponding string
    if (names.length === 0) return 'no one likes this' 
    
    //if names array has a length of 1, use string interpolation to return corresponding string with the element in the arry
    if (names.length === 1) return `${names[0]} likes this`; 
    
    //if names array has a length of 2, return corresponding string while using string interpolation
    if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    
    //if names array has a length of 3, return corresponding string while using string interpolation
    if (names.length === 3) return `${names[0]} ${names[1]} and ${names[2]} like this`;
    
    //if the names array length is greater than or equal to 4, return corresponding string while using string interpolation.
    // We get the digit of the other people who liked by subtracting the length by 2 since we already stated two users who liked earlier in the string
    if (names.length >= 4) return `${names[0]} ${names[1]} and ${names.length-2} others like this`;
}

//Find the unique number
function findUniq(arr) {  
  // loops the the array elements
  for(let i = 0; i< arr.length; i++){
    
    // if the elements current index and last index stays consistent, it is not a recurring character, therefore it is unique
    if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){ 
      
      // return that character
      return arr[i] 
    }
  }
}

//findOutlier
function findOutlier(integers){
  // create two arrays for the even values and the odd values
  let evens = []
  let odds = []
  
  // loop through the original array
  for(let i = 0; i< integers.length; i++){ 
    
    //check if the values are even
    if(integers[i] % 2 === 0){ 
      
      // push even values into evens array
      evens.push(integers[i]) 
      //if the the values aren't even, they must be odd
      
    }else{ 
      // push odd values into odds array
      odds.push(integers[i]) 
    }
    
  }
  //if the evens array length was longer, we want the odd character, vice versa of for odds array
  if(evens.length > odds.length){ 
    //return the odd value
    return odds[0] 
    //if the original was mostly odds, and the odds length was longer
  }else{ 
    // return even value
    return evens[0] 
  }
}

//duplicateCount
function duplicateCount(str){
  //intialize a frequency counter, keys will be the letter and the values will be how many times they appear
  let freqCounter = {};
  
  //initialize a new variable to keep track of how many variables repeat
  let count = 0;
  
  //loop through the string and add key-value pairs into the freqCounter
  for(let char of str.toLowerCase()){
    if(freqCounter[char]){
      freqCounter[char] += 1
    } else {
      freqCounter[char] = 1
    }
  }

  //loop through the object and check if they keys have a value greater than one
  //having a key that has a value greater than one means that character has been duplicated
  for(let keys of Object.values(freqCounter)){
    if(keys > 1){
      count++
    }
  }
  //return count, the number of character duplicated
  return count  
}

function moveZeros(arr) {
  //intialize two arrays, one array to hold the zeros and another to hold values that aren't zeros
  let zeros = []
  let data = []
  
  //iterate through the original array  
  for(let i = 0 ; i < arr.length; i++){
    
    //if the the elements in the orignal have a strict equality to 0, we want to push that element at that index in to our zeros array
    if(arr[i] === 0){
      zeros.push(arr[i])
      
      //all other values that aren't 0, go into the data array
    } else {
      data.push(arr[i])
    }
  }
  // concat the two arrays
  return data.concat(zeros)
  
}

//Simple Pig Latin
function pigIt(str){
  //Initialze a new variable and assign it an array of the string, now we can manipulate each word
  let newStr = str.split(' ')
  
  //Using map will alow us to manipulate each word
  return newStr.map(element => {
    
    //if the element is a word, we want to slice of the first letter of the word, then add the first letter to the end of the word, finally add 'ay'
    if(/[a-z]/ig.test(element)){
    return element.slice(1) + element[0] + 'ay'
      
   //if it's not a word just return it back into the array   
  }else{
    return element
  }
    
    //Use .join to turn the array back into the string
  }).join(' ')
}