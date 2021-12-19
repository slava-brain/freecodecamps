/* 

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

*/

function testSize(num) {
  let result;

  if (num < 5) {
    result = "Tiny";
  } else if (num < 10) {
    result = "Small"
  } else if (num < 15) {
    result = "Medium"
  } else if (num < 20) {
    result = "Large"
  } else {
    result = "Huge"
  }
  
  return result;
}

testSize(7);