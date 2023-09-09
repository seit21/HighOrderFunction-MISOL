
//        HIGH ORDER FUNCTION - MISOLLARI


 // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

  //  Note: input will never be an empty string
//('45385593107843568'), '01011110001100111');
 

    //  1- usul
    function fakeBin(x){
        let newStr='';
         for (i=0; i< x.length; i++){
            if ( x[i]<5){
                newStr+=0;
            }
            else if (x[i]>=5){
                newStr+=1;
            }
         }
    
         return newStr;
    }
    console.log(fakeBin('45385593107843568'));
    
    
       // 2- usul
    
    const fakeBin1 = x => x.split("").map(v => v >= 5 ? "1" : "0").join("");
    console.log(fakeBin1('98785593107843568'));
    
    
    // A Tidy number is a number whose digits are in non-decreasing order.
    // Given a number, Find if it is Tidy or not .
    // Number passed is always Positive .
    // Return the result as a Boolean
    // (tidyNumber(12),true);
    // tidyNumber (32) ==> return (false)
    
        // 1- usul
    function tidyNumber(n){
        let a=`${n}`;
        let result = true;
        for( i=0; i<a.length; i++){
            if( a[i] > a[i+1]){
                result = false;
            }
        }
        return result;
      }
    console.log(tidyNumber(2789));
    
        //   2- usul
    
    const tidyNumber1 = (n) => n === +`${n}`.split("").sort((a, b) => a - b).join("");
    console.log(tidyNumber1(29789));

//Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. 
//For example: if num is 454793 the output should be 4547-9-3.
//Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  let result = "";
  let string = `${num}`;
  for (i = 0; i < string.length; i++) {
    result += string[i];
    if(string[i] % 2 === 1 && string[i + 1] % 2 === 1) {
        result += "-"
    }
  }
  return result;
}

console.log(insertDash(454793));


//Our football team has finished the championship.
//Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

//For example: ["3:1", "2:2", "0:1", ...]

//Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

function points(games) {
  let sum = 0;
  for (i = 0; i < games.length; i++) {
    if (games[i].charAt(0) > games[i].charAt(2)) {
      sum += 3;
    } else if (games[i].charAt(0) === games[i].charAt(2)) {
      sum += 1;
    }
  }
  return sum;
}
 console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

