class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // const result = nums.sort((a,b) => a.nums - b.nums);

        const uniqueSet = new Set(nums);
        const numsMap = new Map([...uniqueSet].map(val => [val,val]))

        for (let num of nums) {
            numsMap.set(num, {
            value: num,
            hasConsecutive: numsMap.has(num+1) || numsMap.has(num-1),
            appeared: true
            })
        } 

        let maxLength = 0;
        const n = numsMap.size;
        

        for (let num of numsMap.keys()) {
            let currentNum = num;
            let currentLength = 1;
            
            if (!uniqueSet.has(num - 1)) {
                currentNum = num;
                currentLength = 1;
            }
            
            while (uniqueSet.has(currentNum+1)) {
                currentLength++;
                currentNum++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
        

        return maxLength;
    }
}
