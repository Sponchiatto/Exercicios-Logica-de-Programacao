// Canguru 1 começa em x1 e se move v1 metros por pulo
// Canguru 2 começa em x2 e se move v2 metros por pulo
// Como fazer com que ambos os cangurus  estejam no mesmo lugar?

// x1 - posição de inicio canguru 1
// v1 - velocidade canguru 1
// x2 - posição de inicio canguru 2
// v2 - velocidade canguru 2

// Solution 1
function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return "NO";

  if ((x2 - x1) % (v1 - v2) == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

//Solution 2
function kangaroo2(x1, v1, x2, v2) {
  let pos1 = x1;
  let pos2 = x2;
  let yesNo = "NO";

  for (let index = 0; index < 1000; index++) {
    pos1 += v1;
    pos2 += v2;
    if (pos1 === pos2) {
      yesNo = "YES";
    }
  }
  return yesNo;
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo2(0, 3, 4, 2));