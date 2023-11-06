// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// function solution(s) {
//   const newArr = s.split("");
//   let shit = 0;

//   while (newArr.length !== 0) {
//     let left = newArr.shift();
//     if (shit >= 0) {
//       if (left == "(") shit++;
//       else shit--;
//     } else {
//       return false;
//     }
//   }

//   return shit === 0 ? true : false;
// }

// console.log(solution("()()())"));
// 왼쪽의 개수랑 오른쪽의 개수랑

function solution(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    }
  }

  return stack.length === 0;
}
console.log(solution("()()())"));
