class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let answer = "";

        for (let char of s) {
            if (char.match(/[a-z0-9]/i)) {
            answer+= char.toLowerCase();
            }
        }

        let i = 0;
        let j = answer.length - 1;

        while (i < j) {
            if (answer[i] !== answer[j]) {
                return false;
            }
            i++;
            j--;
        }
        // console.log(answer);
        return true;
    }
}
