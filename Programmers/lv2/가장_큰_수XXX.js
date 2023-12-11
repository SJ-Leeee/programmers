// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const numbersToString = numbers.map(String);
  numbersToString.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    else {
      for (let i = 1; i < Math.max(a.length, b.length); i++) {
        if (a[i] === undefined) {
          if (a[i - 1] >= b[i]) return a.length - b.length;
          else return b.length - a.length;
        }

        if (b[i] === undefined) {
          if (a[i] <= b[i - 1]) return b.length - a.length;
          else return a.length - b.length;
        }

        if (a[i] !== b[i]) {
          return b[i] - a[i];
        }
      }
    }
  });
  return numbersToString.join("");
}
// console.log(newar);

// 1순위 앞이 높은거
// 2순위 앞이같다면 그다음것을 비교 만약 없다면 앞에 있는 값과 같다고 생각

// 아직 못풀었다.
