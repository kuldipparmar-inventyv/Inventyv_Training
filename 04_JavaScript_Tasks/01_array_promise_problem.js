let sumPromise=(arr)=> new Promise((res,rej)=>{
    let sum=arr.reduce((acc,curr)=>{
        return acc+curr},0);
    if(sum>35) res("sum is greater than 35");
    else rej("sum is not enough");
})

function func1(){
    let arr1=[1,2,3,4];
    let firstElem=arr1.shift();
    func2(firstElem,arr1);
}

function func2(firstElem,arr1){
    let arr2=[5,6,7,8]
    arr2.unshift(firstElem);
    arr2.push(...arr1);
    console.log(arr2)
    sumPromise(arr2).then((res)=>console.log(res)).catch((err)=>console.log(err));
}

func1()