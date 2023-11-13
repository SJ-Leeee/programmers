// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const numbersToString = numbers.map(String);
  numbersToString.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    else {
      for (let i = 1; i < Math.max(a.length, b.length); i++) {
        if (a[i] === undefined) {
          return b[i] - a[i - 1];
        }

        if (b[i] === undefined) {
          return b[i - 1] - a[i];
        }

        if (a[i] !== b[i]) return b[i] - a[i];
      }
    }
  });
  return numbersToString.join("");
}

const numbers = [3, 30, 34, 5, 9];
const newar = numbers.map(String);

newar.sort((a, b) => {
  if (a[0] !== b[0]) return b[0] - a[0];
  else {
    for (let i = 1; i < Math.max(a.length, b.length); i++) {
      if (a[i] === undefined) {
        return b[i] - a[i - 1];
      }

      if (b[i] === undefined) {
        return b[i - 1] - a[i];
      }

      if (a[i] !== b[i]) return b[i] - a[i];
    }
  }
});

console.log(newar.join("")); // [ '6', '23', '2', '21', '10' ]

// const aa = "62";
// const bb = "53";
// console.log(aa[0] > bb[0] ? bb[0] - aa[1] : bb);
// 같은애들이 있다면 다음걸 비교해서 올려

// console.log(newar);

// 1순위 앞이 높은거
// 2순위 앞이같다면 그다음것을 비교 만약 없다면 앞에 있는 값과 같다고 생각

// 아직 못풀었다.
