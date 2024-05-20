// Two friends Anna and Brian, are deciding how to split the bill at a dinner.
// Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion.
// You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill = [2,4,6] Anna declines to eat
// item k = bill[2] which costs 6.
// If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3. If he includes the cost of bill[2],
// he will calculate (2+4+6)/2 = 6.
// In the second case, he should refund 3 to Anna.

// Function Description

// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split.
// Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

function bonAppetit(bill, k, b) {
  if (!Array.isArray(k)) {
    k = [k];
  }
  // Soma dos itens que Anna consumiu, excluindo os itens nos índices em k
  // acumulador (sum), valor atual (cost), índice atual (index) e array original (bill).
  const totalCost = bill.reduce((sum, cost, index) => {
    return k.includes(index) ? sum : sum + cost;
  }, 0);

  // Calcular a parte que Anna deveria pagar
  const annaShouldPay = totalCost / 2;

  // Comparar com o valor que Anna pagou
  if (annaShouldPay === b) {
    console.log("Bon Appetit");
    return "Bon Appetit";
  } else {
    const refund = b - annaShouldPay;
    console.log(refund);
    return refund;
  }
}

const bill = [2, 4, 6];
const k = [2]; // Anna não comeu o item no índice 2
const b = 6; // Contribuição de Anna

console.log(bonAppetit(bill, k, b));

const bill2 = [3, 10, 2, 9];
const k2 = [1,10];
const b2 = 12; // Contribuição de Anna

console.log(bonAppetit(bill2, k2, b2)); // Deve imprimir 5
