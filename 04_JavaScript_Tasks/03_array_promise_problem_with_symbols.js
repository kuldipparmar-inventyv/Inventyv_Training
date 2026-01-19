
const Key1 = Symbol("arr1");
const Key2= Symbol("arr2");

let sumPromise=(obj)=>new Promise((res, rej) => {
       
    let sum = obj[Key2].reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    if (sum > 35) {
        res(`sum is ${sum}: greater than 35`);
    } else {
        rej(`sum is ${sum}: not enough`);
    }
});

function func1() {
    let obj1 = {
        [Key1]: [1, 2, 3, 4]
    };

    let firstElem = obj1[Key1].shift(); 
    
    return func2(firstElem, obj1[Key1]);
}

function func2(firstElem, arr1) {
   
    let obj2 = {
        [Key2]: [5, 6, 7, 8]
    };
    
    obj2[Key2].unshift(firstElem);
    obj2[Key2].push(...arr1); 
    
    sumPromise(obj2).then((msg) => console.log(msg)).catch((err) => console.error(err));
}

func1()
    