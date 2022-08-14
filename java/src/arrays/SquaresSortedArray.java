package arrays;

import java.util.Arrays;

public class SquaresSortedArray {
  public int[] sortedSquares(int[] numbers) {
    int[] results = Arrays.stream(numbers).map(n -> (int) Math.pow(n, 2)).toArray();
    Arrays.sort(results);
    return results;
  }
}
