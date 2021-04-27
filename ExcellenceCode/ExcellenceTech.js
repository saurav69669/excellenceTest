 
//  Question 1
// Define an array of numbers (use any random numbers). Write a program in Javascript to print only the even numbers of the array. Do not use any library functions, need to do via for loops only
 
const arrEven= [1,45,22,55,34,67,90,21,47,64]
for(let i=0; i<arrEven.length; i++)
{
    if(arrEven[i] % 2 !== 0) continue;

    console.log(arrEven[i]);
}


// Question 2
// Find the maximum consecutive 1's in an array of 0's and 1's.


const nums= [1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1]

var findMaxConsecutiveOnes = function(nums) {
    let largeCount = 0;
    let currentCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largeCount)
           largeCount = currentCount;
    };
         return largestCount;
};




//Question 3
//Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.

const arrex= [1,2,3,3,4,5,6,7,7,8,9]

for(let i=0; i<arrex.length; i++)
{
    for(let j=i+1; j<arrex.length; j++)
    {
        if(arrex[i] == arrex[j])
        {
            console.log(arrex[i] );
        }
    }
}
        
//  Question 4
// Assume we have a form e.g
// For the above form, write validation in javascript so that if the firstname is empty or if checkme is not checked, it will not allow the form to submit.



function validateForm() {

    // fname Validation
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    // CheckBox Validation
    if (myForm.checkMe.checked == false) 
    {
        alert ("You need to check the checkbox!");
        return false;
    } else {    
        return true;
    }
  };



//   Question 8
// Assume there is a json object 
// Write a code to sort the object by id  
// we can convert it first into array and then apply sort method.


var obj =[{
    "id":4, "name":"abc"},
    {"id":10, "name": "abc2"},
    {"id":5, "name": "abc3"},
    {"id":6, "name": "abc5"}]
   
obj.sort(function(a, b){
    return a.id - b.id;
});
console.log(obj);
