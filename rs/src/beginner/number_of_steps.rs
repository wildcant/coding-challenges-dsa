fn number_of_steps(num: i32) -> i32 {
    let mut count = 0;
    let mut val = num;
    while val > 0 {
        count += 1;
        val = if val % 2 == 0 { val / 2 } else { val - 1 };
    }
    count
}

fn number_of_steps_bit_operations(num: i32) -> i32 {
    let mut count = 0;
    let mut val = num;
    while val > 0 {
        count += 1;
        val = if val & 1 == 0 { val >> 1 } else { val - 1 };
    }
    count
}

/*
  - for each 0 in bit representation we need 1 operation ( / 2)
  - for each 1 in bit representation (except for the first one) we need 2 operations (-1 and / 2)
  e.g.
    14 = 1 1 1 0
    ops= 1 2 2 1 = 6
*/
fn number_of_steps_bit_counts(num: i32) -> i32 {
    match num > 1 {
        true => (num.count_zeros() - num.leading_zeros() + 2 * num.count_ones() - 1) as i32,
        false => num,
    }
}

pub fn test() {
    println!("Number of steps tests");
    assert_eq!(number_of_steps(100), 9);
    assert_eq!(number_of_steps_bit_operations(100), 9);
    assert_eq!(number_of_steps_bit_counts(100), 9);
    println!("All tests passed!")
}
