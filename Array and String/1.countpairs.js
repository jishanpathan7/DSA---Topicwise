// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.




//using Brute Force O(n^2)
function getCountPairsUsingBruteForce(arr,n,k) {
    let count = 0;
    for(let i=0;i<n;i++) {
        for(let j=i+1;j<n;j++) {
            if(arr[i]+arr[j] === k) {
                count++;
            }
        }
    }
    return count
}

//Using Hashmap O(n)
function getCountPairsUsingHashmap(arr,n,k) {
    let count = 0;
    let hashMap = {};
    for(let i=0;i<n;i++) {
        let diff = k - arr[i];
        if(hashMap[diff] != undefined) {
            count++;
        }
        hashMap[arr[i]] = 1;
    }
    return count;
}
console.log(getCountPairsUsingHashmap([1,2,3,4,5,6,7,8,9,10],10,10));
