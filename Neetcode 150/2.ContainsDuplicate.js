// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//Difficulty: Easy

function containsDuplicate(arr) {
    let hashMap = {};
    for(let i=0;i<arr.length;i++) {
        if(hashMap[arr[i]] != undefined) {
            return true;
        }
        hashMap[arr[i]] = 1;
    }
    return false;
}