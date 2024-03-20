// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded 
// with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many 
// bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight
//  another specific given number of dragons, will he survive?

//Return true if yes, false otherwise :)

//Solution 1
function hero(bullets, dragons) {
  const bulletsNeeded = dragons * 2;

  return bullets >= bulletsNeeded;
}

//Solution 2
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// Exemplo de uso da função
const bulletsAvailable = 2; // Número de balas disponíveis
const dragonsCount = 4; // Número de dragões a serem derrotados

console.log(hero(bulletsAvailable, dragonsCount));
