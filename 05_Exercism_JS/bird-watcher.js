// @ts-check

/**
 * Calculates the total bird count from an array of daily counts.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} total bird count in the specified week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  const startIndex = (week - 1) * 7;
  const endIndex = startIndex + 7;
  
  for (let i = startIndex; i < endIndex; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}