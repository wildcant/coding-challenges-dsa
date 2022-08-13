package beginner;

import java.util.Arrays;

public class FizzBuzz {
  public static String mapIntToFizzBuzz(int i) {
    if (i % 3 == 0 && i % 5 == 0) {
      return "FizzBuzz";
    } else if (i % 3 == 0) {
      return "Fizz";
    } else if (i % 5 == 0) {
      return "Buzz";
    } else {
      return Integer.toString(i);
    }
  }

  public static String[] fizzBuzz(int n) {
    String[] output = new String[n];
    for (int i = 1; i <= n; i++) {
      output[i - 1] = mapIntToFizzBuzz(i);
    }
    return output;
  }

  public static void main(String[] args) {
    System.out.println("Testing fizz buzz");
    assert (Arrays.equals(fizzBuzz(3), new String[] { "1", "2", "Fizz" }));
    System.out.println("All tests passed!");
  }
}
