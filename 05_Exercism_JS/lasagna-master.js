/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if(!timer && timer!==0) return   'You forgot to set the timer.'
  else if(timer===0) return 'Lasagna is done.';
  else return 'Not done, please wait.'
}

export function preparationTime(layers,prepTime=2) {
      
 return  layers.length*prepTime;
}

export function quantities(layers) {
  let totalNoodles=0,totalSauces=0;
  layers.forEach((layer)=>{
    if (layer==="noodles") totalNoodles+=50;
    else if(layer==="sauce")  totalSauces+=0.2;
    
  })
  return {
    'noodles':totalNoodles,
      'sauce':totalSauces
  }  
}

export function addSecretIngredient(friendsList,myList) {
  myList.push(friendsList[friendsList.length-1])
  
}

export function scaleRecipe(recipe,portions) {
  let newRecipe={}
  for(let key in recipe){
    newRecipe[key]=recipe[key]/2*portions;
  }  
  return newRecipe;
}
