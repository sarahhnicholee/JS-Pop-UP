/*1.Make a  constant variable with the text "You have received this message because you have been chosen to open an important vault. Here is the secret combination"
2.Make a constant variable with operators for the first number in the vault code. 
3.Make a constant variable with operators for the second number in the vault code.
4.Make a constant variable with operators for the third number in the vault code.
5.Make an alert statement to pop up in your browser. Be sure to plug in your variable names for each of your variables and put dashes in between your vault numbers. 
*/
const mess =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination";
//Above is the message that will display in your pop up alert in the place of "mess" on line 16 of your code

const firstNum = 5 + 5;
//The answer to the above math problem is 10. This answer will be the first number in the combination to display in the alert on line 16.

const secondNum = 80 / 2;
//The answer to the above math problem is 40. This answer will be the second number in the combination to display in the alert on line 16.

const thirdNum = 13 * 3;
//The answer to the above math problem is 39. This answer will be the first number in the combination to display in the alert on line 16.

alert(`${mess} ${firstNum}-${secondNum}-${thirdNum}`);
//Line 20 makes the alert appear in the browser as a pop up. The variable outputs will replace the variable names. 
