class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        
        let deal = 0;

        while (i < prices.length - 1) {
            let j = prices.length - 1;
            while (j > i) {
                let profit = prices[j] - prices[i];
                if (profit > deal) {
                    deal = profit;
                }
                j--;
            }
            i++;
        }
    return deal;
    }
}