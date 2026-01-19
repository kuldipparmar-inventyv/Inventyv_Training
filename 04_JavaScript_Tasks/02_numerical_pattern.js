let n = 8; //here logic is working with all positive value of n ...

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        // here instead of using +1 (a static value addition) , I  have used concept of bit manipulation 
        // logic for that : 2's complement = 1's complement + 1 
        //                  ~ operator do inverting of all bits , means 1's complemnt 
        //                  but actual representation of numbers are 2's complemnt representation
        //                  so -(~(n))=n+1 ...
        process.stdout.write(
            ((i < j && i < -(~(n - i)) && i < -(~(n - j)) ? i : (j < -(~(n - i)) && j < -(~(n - j))) ? j :
            (n - i < n - j ) ? -(~(n - i )) : -(~(n - j ))) + " "));      
    }
    console.log(""); 
}