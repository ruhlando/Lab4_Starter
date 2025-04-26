/**
 *
 * @param {*} num1, first number to add.
 * @param {*} num2, second number to add.
 * @param {*} add, boolean value to tell the function what to do.
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
  // 1. If add is false, bail out immediately:
  if (!add) return false;
  // 2. Type-check num1 & num2:
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  }
  // 3. Now safely add:
  return num1 + num2;
}

/**
 *
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount.
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
  // 1. Type-check inputs:
  if (!Array.isArray(prices) || typeof discount !== "number") {
    return false;
  }
  // 2. Empty-array case:
  if (prices.length === 0) {
    return false;
  }
  // 3. Map each price individually:
  return prices.map((price) => {
    // (optional: you could also check typeof price === 'number')
    return price * (1 - discount);
  });
}

module.exports = { sumValues, discountPrices };
