export default function calculateTotal(purchases, applyDiscount) {
  // решение 1:
  const sum = purchases.reduce((total, item) => total + item.count * item.price, 0);

  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;

  // решение 2:
  // let result = 0;
  // for (let i = 0; i < purchases.length; i++) {
  // result += purchases[i].price * purchases[i].count;
  // }
  // return result;
}

// module.exports = {
//   calculateTotal
// }
