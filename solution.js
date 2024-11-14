function SearchingChallenge(str) { 
    // // code goes here  
    let letterCount = 0
    let sumOfNumbers = 0
    str.split('').forEach(el=> {
      if (/[a-zA-z]/.test(el) && el !== ' ') letterCount++;
      if (!isNaN(el) && el !== ' ') sumOfNumbers+=parseInt(el);
    })
    return Math.round(sumOfNumbers/letterCount); 
  }
     
  // keep this function call here 
  console.log(SearchingChallenge('H3llow9-9')); // 4