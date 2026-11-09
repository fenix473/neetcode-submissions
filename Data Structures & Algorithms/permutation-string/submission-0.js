class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    
        for (let l = 0; l <= s2.length - s1.length; l++) {
            let res = s2.substring(l, l + s1.length)    
            
            if (res.split("").sort().join("") == s1.split("").sort().join("")) {
                return true;
            }
        }
    return false;
    }

}
