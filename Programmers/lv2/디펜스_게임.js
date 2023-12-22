// https://school.programmers.co.kr/learn/courses/30/lessons/142085

// function solution(n, k, enemy) {
//   if (k >= enemy.length) return enemy.length;
//   // 무적권이 많으면 바로 퇴출
//   let maxEnemy = 0;
//   let canEnemyNum = 0;
//   for (let i = 0; i < enemy.length; i++) {
//     canEnemyNum += enemy[i];
//     // 가능한 범위내에서 배열에 넣고 최대 수도 정한다.
//     if (maxEnemy < enemy[i]) {
//       maxEnemy = enemy[i];
//     }

//     if (canEnemyNum > n) {
//       // 만약 최대수가 내 병사보다 많다면
//       if (k === 0) {
//         // 병사보다 많지만 무적권이 없다. 난 여기까지
//         return i;
//       } else {
//         // 무적권이 있다. 그러면 무적권 하나 차감하고 가장 높은 라운드 적을 제외시킨다.
//         k -= 1;
//         canEnemyNum -= maxEnemy;
//         maxEnemy = 0;
//       }
//     }
//   }
//   return enemy.length;
// }

function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;
  // 무적권이 많으면 바로 퇴출

  let canEnemy = [];
  let canEnemyNum = 0;
  for (let i = 0; i < enemy.length; i++) {
    canEnemy.push(enemy[i]);
    canEnemyNum += enemy[i];
    // 가능한 범위내에서 배열에 넣고 최대 수도 정한다.
    if (canEnemyNum > n) {
      // 만약 최대수가 내 병사보다 많다면
      if (k === 0) {
        // 병사보다 많지만 무적권이 없다. 난 여기까지
        return i;
      } else {
        // 무적권이 있다. 그러면 무적권 하나 차감하고 가장 높은 라운드 적을 제외시킨다.
        k -= 1;
        let bestChoice = canEnemy.sort((a, b) => b - a).shift();
        canEnemy = canEnemy.slice(0, 2);
        canEnemyNum -= bestChoice;
      }
    }
  }
  return enemy.length;
}
console.log(solution(1, 3, [12, 11, 4, 1, 1, 5, 8, 6, 7]));

// 무적권을 언제써야할까?
// 1. enemy를 순차적으로 병사 이전까지 합한다
// 2. 합한 라운드에서 가장 높은 적을 제외한다 + 무적권 -1
// 3. 가능하다면 다음 라운드를 더하고 다시 가장 높은 적을 제외한다 + 무적권 -1

let a = [1, 121212, 332, 4244, 52526, 7724, 7887811];

a.sort((a, b) => a - b);
a = a.slice(0, 2);
console.log(a);
