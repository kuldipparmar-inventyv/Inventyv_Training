/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let totalPrice=0;
  pizza==='Margherita' ? totalPrice+=7 : (pizza==='Caprese' ? totalPrice+=9 : totalPrice+=10);

  extras.forEach((e)=>{
    e==="ExtraSauce" ? totalPrice+=1 :totalPrice+=2;
  })
  return totalPrice;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalOrderPrice=0;
  pizzaOrders.forEach((order)=>{
    
    totalOrderPrice+=pizzaPrice(order.pizza,...order.extras);
  })
  return totalOrderPrice;
}
