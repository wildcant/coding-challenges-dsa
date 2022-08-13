package beginner;

import java.util.Arrays;

public class RunningSum {
  public static int[] runningSum(int[] numbers) {
    int[] output = new int[numbers.length];
    output[0] = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
      output[i] = output[i - 1] + numbers[i];
    }
    return output;
  }

  public static void main(String[] args) {
    /*
     * Input: numbers = [1,2,3,4]
     * Output: [1,3,6,10]
     * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
     */
    int[] input = { 1, 2, 3, 4 };
    int[] output = { 1, 3, 6, 10 };

    assert (Arrays.equals(runningSum(input), output));
  }
}
