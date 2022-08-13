#[derive(PartialEq, Eq, Clone, Debug)]
struct ListNode {
    val: i32,
    next: Option<Box<ListNode>>,
}
impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

// Brute force solution.
fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let head_node = head?.clone();
    if head_node.next == None {
        return Some(head_node);
    }

    // Get linked list length
    let mut length = 1.0;
    let mut current_node = head_node.clone();
    while current_node.next != None {
        length += 1.0;
        current_node = current_node.next?.clone();
    }

    // Get linked list middle index
    let dec_middle: f32 = length / 2.0;
    let rounded_middle = if length as i32 % 2 == 0 {
        dec_middle.ceil() as i32 + 1
    } else {
        dec_middle.ceil() as i32
    };

    // Get linked list middle node
    let mut middle_node = head_node.clone();
    (1..rounded_middle).for_each(|_| {
        middle_node = middle_node.next.clone().unwrap();
    });
    Some(middle_node)
}

pub fn test() {
    let head = Some(Box::new(ListNode {
        val: 1,
        next: Some(Box::new(ListNode {
            val: 2,
            next: Some(Box::new(ListNode {
                val: 3,
                next: Some(Box::new(ListNode {
                    val: 4,
                    next: Some(Box::new(ListNode {
                        val: 5,
                        next: Some(Box::new(ListNode::new(6))),
                    })),
                })),
            })),
        })),
    }));
    let head_clone = head.clone().unwrap();
    assert_eq!(
        middle_node(head),
        head_clone.next.unwrap().next.unwrap().next
    );
}
