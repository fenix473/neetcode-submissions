#include <unordered_map>
using namespace std;

class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_map<int, int> intFreq;
        for (int i : nums) {
            intFreq[i]++;
            if (intFreq[i] > 1) { 
                return true;
                }
            }
        return false;    
    }
};

