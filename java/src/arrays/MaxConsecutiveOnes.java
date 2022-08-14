package arrays;

public class MaxConsecutiveOnes {
  public static int findMaxConsecutiveOnes(int[] numbers) {
    int max = 0;
    int count = 0;
    for (int n : numbers) {
      if (n == 1) {
        count += 1;
        max = count > max ? count : max;
      } else {
        count = 0;
      }
    }
    return max;
  }
}
