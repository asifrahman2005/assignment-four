// Problem solve 01 //

function calculateTax(income, expense) {
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    const profit = income - expense;
    const tax = profit * .20;  
    return tax;
}
const result = calculateTax(10000, 3000);
console.log(result);


/**
 * 
 */


// Problem solve 02 //

function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }

    const email_name=email.split("@")
    const nickName=email_name[0]
    const domaineName=email_name[1]

    const message=nickName + " sent you an email from " +domaineName

    return message

}
console.log(sendNotification("nurmahammadmondol@gmail.com"));
console.log(sendNotification("mdlitonmia@gmail.com"));


/**
 */

// problem 3

function checkDigitsInName(name) {
     if (typeof name !== 'string') {
        return "Invalid Input";
    }
    let digits = false;
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            digits = true;
            break;
        }
    }
return digits;
}
console.log(checkDigitsInName("robi"));

/**
 * 
 */

// problem 4

function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
      return 'Invalid Input';
    }
  
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    if (obj.isFFamily === true) {
      isFFamily = 20;
    } else {
      isFFamily = 0;
    }
    const marks = testScore + schoolGrade + isFFamily;
    if (marks >= 80) {
      return true;
    } else {
      return false;
    }
  }
  
  const info = { name: 'Rajib', testScore: 45, schoolGrade: 25, isFFamily: true };
  const results = calculateFinalScore(info);
  console.log(results);
  

/**
 * 
 */

// Problem solve 5

function  waitingTime(waitingTimes, serialNumber) {

    if (
        Array.isArray(waitingTimes) ===false || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let sum = 0;
    for (let waitT of waitingTimes) {
      sum += waitT;
    }

    let Length = waitingTimes.length;
    let avarageTotal = sum / Length;
    let round = Math.round(avarageTotal);
  
    let list = serialNumber - 1;
    let LaterSize = list - Length;
  
    let result = round * LaterSize;
  
    return result;
   
}

let arrayTime = [ 6 ];
let serialNumbers =4;

const time_result = waitingTime(arrayTime, serialNumbers);
console.log(time_result);