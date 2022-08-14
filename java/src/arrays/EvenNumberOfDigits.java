package arrays;

public class EvenNumberOfDigits {
  public int findNumbers(int[] numbers) {
    int count = 0;
    for (int n : numbers) {
      if (Integer.toString(n).length() % 2 == 0) {
        count += 1;
      }
    }
    return count;
  }
}
