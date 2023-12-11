//https:school.programmers.co.kr/learn/courses/30/lessons/172928
function solution(park, routes) {
  let currentLocate = [];

  // 현재 위치 잡기
  for (let idx = 0; idx < park.length; idx++) {
    if (park[idx].indexOf("S") !== -1) {
      currentLocate.push(idx);
      currentLocate.push(park[idx].indexOf("S"));
      break;
    }
  }

  routes.forEach((route) => {
    let testLocate = [...currentLocate];
    // 현재위치
    let meter = Number(route[2]);
    // 움직일 거리

    let ver = testLocate[0];
    // 현재 위아래
    let ho = testLocate[1];
    // 현재 양옆
    let avail = false;
    if (route[0] === "E" && park[ver][ho + meter]) {
      // 만약 동쪽으로 움직이라 하면
      if (!park[ver].slice(ho, ho + meter + 1).includes("X")) {
        // X를 포함하고 있냐? 위치가 존재는 하냐?
        testLocate[1] += meter;
        currentLocate = [...testLocate];
      }
    } else if (route[0] === "W" && park[ver][ho - meter]) {
      if (!park[ver].slice(ho - meter, ho + 1).includes("X")) {
        // X를 포함하고 있냐? 위치가 존재는 하냐?
        testLocate[1] -= meter;
        currentLocate = [...testLocate];
      }
    } else if (route[0] === "S" && park[ver + meter]) {
      avail = true;
      for (let y = ver + 1; y <= ver + meter; y++) {
        if (park[y][ho] === "X") {
          avail = false;
        }
      }
      if (avail) {
        testLocate[0] += meter;
        currentLocate = [...testLocate];
      }
      avail = false;
    } else if (route[0] === "N" && park[ver - meter]) {
      avail = true;
      for (let y = ver - meter; y < ver; y++) {
        if (park[y][ho] === "X") {
          avail = false;
        }
      }
      if (avail) {
        testLocate[0] += meter;
        currentLocate = [...testLocate];
      }
      avail = false;
    }
  });

  return currentLocate;
}
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
// 1. 일단 S를 찾는다
// 2. 동작
// if (route[0] === "E") {
//     testLocate[1] += meter;
//   } else if (route[0] === "W") {
//     testLocate[1] -= meter;
//   } else if (route[0] === "S") {
//     testLocate[0] += meter;
//   } else {
//     testLocate[0] -= meter;
//   }
//   let ho = testLocate[0];
//   let ver = testLocate[1];

//   if (park[ho][ver] !== undefined && park[ho][ver] !== "X") {
//     currentLocate = [...testLocate];
//   }

// for (let y = ver; y <= ver + meter; y++) {
//     if (park[y][ho] === "X") {
//       avail = false;
//       break;
//     }
//   }
