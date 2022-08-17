// There will be two arrays of integers. 
// Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays.
// Determine how many such numbers exist.

// Example
// a = [2,6]
// b = [24,36]
//There are two numbers between the arrays: 6 and 12
// 6%2 = 0, 6% 6 = 0, 24%6 = 0, 36%6 = 0 for the first value
// 12%2 = 0, 12%6 = 0, 24%12 = 0, 36%12 = 0 for the second value
//Return 2
//Difficulty: Easy
//Tags: Array, Hash Table
function getTotalX(a, b) {
    // Write your code here
    let max = Math.max(...b);
    let min = Math.min(...a);
    let count = 0;
    for(let i=min;i<=max;i++) {
        let flag = true;
        for(let j=0;j<a.length;j++) {
            if(i % a[j] !== 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            for(let j=0;j<b.length;j++) {
                if(b[j] % i !== 0) {
                    flag = false;
                    break;
                }
            }
        }
        if(flag) {
            count++;
        }
    }
    return count;
}