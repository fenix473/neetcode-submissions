class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            let found = false;
            for (let k = i + 1; k < temperatures.length; k++) {
                if (temperatures[k] > temperatures[i]) {
                    stack.push(k-i);
                    found = true;
                    break;
                }
            }
            if (!found) {stack.push(0)}
        }
        return stack;
    }
}
