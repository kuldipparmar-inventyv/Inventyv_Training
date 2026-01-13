// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let one=array1.reduce((acc,curr)=>{
    return acc*10+curr;
  })
  let two=array2.reduce((acc,curr)=>{
    return acc*10+curr;
  })
  return one+two;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let strNum=String(value);
  for(let i=0;i<strNum.length;i++){
    if(strNum[i]!==strNum[strNum.length-i-1]){
      return false;
    }
  }
  return true;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input) return 'Required field'
  else if(Number(input)) return '';
  else return 'Must be a number besides 0';
}
