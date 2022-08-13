package beginner;

public class RansomNote {
  static boolean canConstruct(String ransomNote, String magazine) {
    StringBuilder m = new StringBuilder(magazine);
    for (int i = 0; i < ransomNote.length(); i++) {
      int characterIndex = m.indexOf(Character.toString(ransomNote.charAt(i)));
      if (characterIndex != -1) {
        m.deleteCharAt(characterIndex);
      } else {
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    System.out.println("Testing canConstruct");
    assert (canConstruct("aa", "ab"));
    System.out.println("All tests passed!");
  }
}
