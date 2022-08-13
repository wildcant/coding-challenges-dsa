package beginner;

public class NumberOfSteps {
  public static int numberOfSteps(int num) {
    int count = 0;
    int val = num;
    while (val > 0) {
      count += 1;
      val = val % 2 == 0 ? val / 2 : val - 1;
    }
    return count;
  }

  public static void main(String[] args) {
    System.out.println(numberOfSteps(14));
  }
}
