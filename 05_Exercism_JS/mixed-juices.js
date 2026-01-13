// @ts-check

/**
 * Determines how long it takes to prepare a specific juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let cutLimes = 0;
  let totalWedges = 0;

  while (totalWedges < wedgesNeeded && cutLimes < limes.length) {
    switch (limes[cutLimes]) {
      case 'small':
        totalWedges += 6;
        break;
      case 'medium':
        totalWedges += 8;
        break;
      case 'large':
        totalWedges += 10;
        break;
    }
    cutLimes++;
  }
  return cutLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    const nextJuice = orders.shift();
    timeLeft -= timeToMixJuice(nextJuice);
  }
  return orders;
}