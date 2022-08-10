// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Difficulty: Easy


function ValidAnagram(s,t) {
    if(s.length !== t.length) {
        return false;
    }
    let hashMap = {};
    for(let i=0;i<s.length;i++) {
        if(hashMap[s[i]] === undefined) {
            hashMap[s[i]] = 1;
        } else {
            hashMap[s[i]]++;
        }
    }
    for(let i=0;i<t.length;i++) {
        if(hashMap[t[i]] === undefined) {
            return false;
        } else {
            hashMap[t[i]]--;
            if(hashMap[t[i]] < 0) {
                return false;
            }
        }
    }
    return true;
}