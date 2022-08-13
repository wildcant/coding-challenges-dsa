package beginner;

class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

public class MiddleNode {

  public static ListNode middleNode(ListNode head) {
    int length = 1;
    ListNode currentNode = head;
    while (currentNode.next != null) {
      length += 1;
      currentNode = currentNode.next;
    }
    for (int i = 0; i < length / 2; i++) {
      head = head.next;
    }
    return head;
  }

  public static void main(String[] args) {
    ListNode head = new ListNode(
        1,
        new ListNode(
            2,
            new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))));
    System.out.println(middleNode(head).val);
  }
}
