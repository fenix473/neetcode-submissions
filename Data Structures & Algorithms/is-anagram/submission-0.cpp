#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int> wordFreq1;
        unordered_map<char, int> wordFreq2;
        for (char c : s) {
            wordFreq1[c]++;
        }
        for (char c : t) {
            wordFreq2[c]++;
        }
        if (wordFreq1 == wordFreq2) {
            return true;
        }
        else {return false;}
    }
};
