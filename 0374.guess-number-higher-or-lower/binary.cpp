// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        int min = 1, max = n;
        int tar, gus;

        while (true) {
            tar = (max - min) / 2 + min;
            gus = guess(tar);
            if (gus == 1) {
                min = tar + 1;
            } else if (gus == -1) {
                max = tar - 1;
            } else {
                return tar;
            }
        }
    }
};
