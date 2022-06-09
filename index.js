let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

// 1. asking the user a question.
    // window.prompt(weeklyExpenseQuestions[0]);

// 2. collecting the user's answer.
    // let answer = window.prompt(weeklyExpenseQuestions[0]);
    // console.log(answer);

    // let stringAnswer = window.prompt(weeklyExpenseQuestions[0]); // getting user's string answer.
    // let numberAnswer = parseFloat(stringAnswer); // turning user's string answer to a number.
    // console.log(numberAnswer);

// or 
    // let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0])); // getting user's string answer and turning it into a number.
    // console.log(answer);

// 3. add to the totals.
    // weeklyExpenses = weeklyExpenses + answer; // add the user's answer to the weeklyExpenses total.

// 4. add iteration.
for(let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i])); // getting user's string answer and turning it into a number.
    console.log(answer);
    weeklyExpenses = weeklyExpenses + answer; // add the user's answer to the weeklyExpenses total.
}
