// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  var answer = "";
  const alphabat = "abcdefghijklmnopqrstuvwxyz";

  const before = [...s];
  const skipArr = [...skip];

  const skipindex = skipArr.map((i) => {
    let beforeIndex = alphabat.indexOf(i);
  });
  before.forEach((i) => {
    let beforeIndex = alphabat.indexOf(i);
    let newIndex = beforeIndex + index;

    if (newIndex > 25) newIndex = newIndex - 26;

    answer += alphabat[newIndex];
  });

  console.log(answer);
  return answer;
}

solution("aukks", "asasas", 7);
