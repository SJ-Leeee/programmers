// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  var answer = 0;

  const timeStrToNumber = book_time.map(function (timeArray) {
    return timeArray.map(function (timeString) {
      // 시간과 분을 추출
      const [hours, minutes] = timeString.split(":").map(Number);
      // 시간을 24시간 형식으로 변환하여 숫자로 합치기
      const numericTime = hours * 100 + minutes;
      return numericTime;
    });
  });

  timeStrToNumber.sort((a, b) => a[0] - b[0]);

  let finishTimeArr = [];
  timeStrToNumber.forEach((i) => {
    finishTimeArr.push(i[1]);
    // 1920 넣고
    finishTimeArr.sort((a, b) => a - b);
    // 정렬하고
    if (finishTimeArr[0] + 10 <= i[0]) {
      // 만약 들어갈 수 있다면
      finishTimeArr.shift();
      // 앞에 것을 잘라
    } else {
      // 아니라면
      answer++;
    }
  });
  console.log(answer);
  return answer;
}

solution([
  ["16:00", "16:10"],
  ["16:20", "16:30"],
  ["16:40", "16:50"],
  ["16:00", "16:10"],
  ["16:20", "16:30"],
  ["16:40", "16:50"],
  ["16:00", "16:10"],
  ["16:20", "16:30"],
  ["16:40", "16:50"],
]);
// 체크인을 불린값으로 하나 줘야하나
// sort 하고
