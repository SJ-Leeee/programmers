// https://school.programmers.co.kr/learn/courses/30/lessons/92334

// 문제설명
// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

function solution(id_list, report, k) {
  let userList = {};
  let reportedList = {};
  let uniqueReport = [...new Set(report)];
  let blackList = [];
  for (let i of id_list) {
    userList[i] = 0;
  }

  for (let i of uniqueReport) {
    let report = i.split(" ")[1];
    if (!reportedList[report]) {
      reportedList[report] = 1;
    } else {
      reportedList[report]++;
    }
  }

  for (let key in reportedList) {
    if (reportedList[key] >= k) {
      blackList.push(key);
    }
  }

  for (let i of uniqueReport) {
    let [user, target] = i.split(" ");
    if (blackList.includes(target)) {
      userList[user]++;
    }
  }
  return Object.values(userList);
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);
// 일단 reportedList에 넣자 개수랑
// 그리고 그거를 가져와서 메일리시트
