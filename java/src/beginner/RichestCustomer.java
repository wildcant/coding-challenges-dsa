package beginner;

import java.util.Arrays;

public class RichestCustomer {
  public static int maximumWealth(int[][] accounts) {
    return Arrays.stream(accounts).map(account -> Arrays.stream(account).sum()).mapToInt(s -> s).max().getAsInt();
  }

  public static void main(String[] args) {
    System.out.println("Testing maximumWealth");
    assert (maximumWealth(new int[][] { { 1, 2, 3 }, { 3, 2, 1 } }) == 6);
    assert (maximumWealth(new int[][] { { 1, 5 }, { 7, 3 }, { 3, 5 } }) == 10);
    assert (maximumWealth(new int[][] { { 2, 8, 7 }, { 7, 1, 3 }, { 1, 9, 5 } }) == 17);
    System.out.println("All tests passed!");
  }
}
